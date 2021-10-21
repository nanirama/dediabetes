import React, { useState } from 'react';
import useFirebase from './firebase/useFirebase';

export default function BookmarkWidget({
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
      <div className="article-widgets py-4">
        <button
          style={{ cursor: 'pointer' }}
          target="popup"
          onClick={() => {
            typeof window !== 'undefined' &&
              window.open(facebooklink, 'popup', 'width=600,height=600');
            return false;
          }}
        >
          <img
            style={{ width: '30px' }}
            src="https://img.icons8.com/material-outlined/24/fa314a/facebook-new.png"
            alt="facebook"
          />
        </button>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            typeof window !== 'undefined' &&
              window.open(twitterlink, 'popup', 'width=600,height=600');
            return false;
          }}
        >
          <img
            style={{ width: '30px' }}
            src="https://img.icons8.com/material-outlined/24/fa314a/twitter-squared.png"
            alt="twitter"
          />
        </button>
        <a href={emaillink}>
          <img
            style={{ width: '30px' }}
            src="https://img.icons8.com/material-outlined/24/fa314a/mail.png"
            alt="email"
          />
        </a>
        <button onClick={copied}>
          <img
            style={{ width: '30px' }}
            src="https://img.icons8.com/material-outlined/24/fa314a/copy.png"
            alt="copy to clipboard"
          />
        </button>

        <div>
          <button
            title={
              !user
                ? 'Sign In To Bookmark'
                : isBookmarked
                ? 'Remove bookmark'
                : 'Bookmark'
            }
            onClick={bookmarkBtn}
          >
            <img
              style={{ width: '30px' }}
              src={
                isBookmarked
                  ? 'https://img.icons8.com/material-rounded/24/fa314a/bookmark-ribbon.png'
                  : 'https://img.icons8.com/material-outlined/24/fa314a/bookmark-ribbon--v1.png'
              }
              alt="bookmark"
            />
          </button>
        </div>
      </div>
    </>
  );
}
