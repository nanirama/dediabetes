import React, { useState } from 'react';
import RecipeBttmDsktp from './Advertising/RecipeBttmDsktp';
import useFirebase from './firebase/useFirebase';

export default function BookmarkWidget2({
  user,
  isBookmarked,
  setIsBookmarked,
  slug,
  recipe,
  title,
}) {
  const { firebase, db } = useFirebase();

  const articleType = recipe ? 'recipes' : 'posts';
  const [notification, setNotification] = useState(false);
  const [clicker, setClicker] = useState(false);

  const urlPart = recipe ? `recetas/${slug}` : slug;

  const emaillink = `mailto:?&subject=${title}%20-%20dediabetes.com&cc=&bcc=&body=https://www.dediabetes.com/${urlPart}`;
  const facebooklink = `https://www.facebook.com/sharer/sharer.php?u=https://dediabetes.com/${urlPart}`;
  const textfortwitter = `${title} @dediabetes`;
  const twitterlink = `https://twitter.com/intent/tweet?url=https://www.dediabetes.com/${urlPart}&text=%20${textfortwitter}%20%23tag1%20%23tag2`;

  const copied = () => {
    navigator.clipboard.writeText(`https://www.dediabetes.com/${urlPart}`);

    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const bookmarkBtn = () => {
    if (user === null) {
      setClicker(true);
      setTimeout(() => {
        setClicker(false);
      }, 3000);
    } else {
      const articleRef = db.collection(articleType).doc(slug);
      const userRef = db.collection('users').doc(user.uid);

      if (isBookmarked) {
        articleRef.get().then(doc => {
          if (doc.exists) {
            const article = doc.data();
            if (article.bookmarks <= 1) {
              articleRef.delete();
            } else {
              articleRef.update({
                bookmarks: firebase.firestore.FieldValue.increment(-1),
              });
            }
          }
        });

        userRef.update({
          [articleType]: firebase.firestore.FieldValue.arrayRemove({
            title,
            slug,
          }),
        });
        setIsBookmarked(false);
      } else {
        articleRef.get().then(doc => {
          if (doc.exists) {
            articleRef.update({
              bookmarks: firebase.firestore.FieldValue.increment(1),
            });
          } else {
            articleRef.set({
              bookmarks: firebase.firestore.FieldValue.increment(1),
              title,
            });
          }
        });

        userRef.update({
          [articleType]: firebase.firestore.FieldValue.arrayUnion({
            title,
            slug,
          }),
        });
        setIsBookmarked(true);
      }
    }
  };

  return (
    <>
      {notification ? (
        <div
          style={{
            backgroundColor: 'lightgreen',
            padding: '5px 10px',
            position: 'fixed',
            top: '0',
            transform: 'translate(-50%, 0%)',
            left: '50%',
            zIndex: '2000',
          }}
        >
          Copied To ClipBoard
        </div>
      ) : (
        ''
      )}
      {clicker ? (
        <div
          style={{
            backgroundColor: 'red',
            padding: '10px 20px',
            position: 'fixed',
            top: '0',
            transform: 'translate(-50%, 0%)',
            left: '50%',
            zIndex: '50',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          You Need To Be Signed In To access That Feature
        </div>
      ) : (
        ''
      )}
      <div className="flex flex-row items-center">

        <button
          target="popup"
          className="focus:outline-none mr-4"
          onClick={() => {
            typeof window !== 'undefined' &&
              window.open(facebooklink, 'popup', 'width=600,height=600');
            return false;
          }}
        >
          <span className="text-gray-500 ">
          <svg fill="currentColor" className="w-5 h-5" stroke-width="0" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
            </span>
        </button>
        <button

          className="focus:outline-none mr-4"
          onClick={() => {
            typeof window !== 'undefined' &&
              window.open(twitterlink, 'popup', 'width=600,height=600');
            return false;
          }}
        >
          <span className="text-gray-500">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
          </span>
        </button>
        <span className="text-gray-500 mr-4">
        <a href={emaillink}>

        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"></path>
          </svg>


        </a>
        </span>

        <button onClick={copied} className="focus:outline-none text-gray-500 flex flex-row mr-4">

          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 512 512">
            <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
          </svg>


        </button>

        
          <button
            title={
              !user
                ? 'Sign In To Bookmark'
                : isBookmarked
                ? 'Remove bookmark'
                : 'Bookmark'
            }
            onClick={bookmarkBtn}
            className="focus:outline-none text-gray-500 mr-2 p-1 flex flex-row border-2 rounded-xl  hover:bg-themeBrandColor hover:text-white"
          >


                {isBookmarked ? <svg fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.69 2a1.75 1.75 0 00-1.75 1.756L5 21.253a.75.75 0 001.219.583L12 17.21l5.782 4.625A.75.75 0 0019 21.25V3.75A1.75 1.75 0 0017.25 2H6.69z"></path>
              </svg> : <svg fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M4.75 2.5a.25.25 0 00-.25.25v9.91l3.023-2.489a.75.75 0 01.954 0l3.023 2.49V2.75a.25.25 0 00-.25-.25h-6.5zM3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path>
              </svg>}
              <span>{recipe ? `Guarda en Recetario` : `Guarda Artículo`}</span>

          </button>

      </div>
    </>
  );
}
