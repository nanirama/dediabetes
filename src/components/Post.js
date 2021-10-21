import { Link } from 'gatsby';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const Post = ({
  slug,
  title,
  recipe,
  // verified,
  // text,
}) => {
  const [notification, setNotification] = useState(false);
  const facebooklink = `https://www.facebook.com/sharer/sharer.php?u=https://dediabetes.com/${slug}`;
  const textfortwitter = `${title} @dediabetes`;
  const twitterlink = `https://twitter.com/intent/tweet?url=https://www.dediabetes.com/${slug}&text=%20${textfortwitter}%20%23tag1%20%23tag2`;
  const emaillink = `mailto:?&subject=${title}%20-%20dediabetes.com&cc=&bcc=&body=https://www.dediabetes.com/${slug}`;

  const copied = rslug => {
    navigator.clipboard.writeText(`https://www.dediabetes.com/${rslug}`);

    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <Card className="my-4" >
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
      {/* <div className="title text-2xl ml-2 flex"> */}
      <CardContent>
      <h2 className="mr-4">{title} </h2>

      </CardContent>
      <CardActions>
      {/* {verified ? (
          <button
            style={{
              backgroundColor: 'lightpink',
              padding: '0px 5px',
              fontSize: '1rem',
              borderRadius: '5px',
              color: 'black',
              maxHeight: '40px',
            }}
          >
            Verified
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="detail font-medium"></div>
       <div className="text-para">
        {' '}
        <p className="ml-5 mt-3 truncate max-h-full">{text}</p>
      </div> */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '24px',
        }}
        className="links-widgets"
      >
        <Link to={`/${slug}`} style={{ margin: '0 5px', cursor: 'pointer' }}>
          Sigue Leyendo
        </Link>

        <div
          style={{
            display: 'flex',
          }}
        >
          {' '}
          <button
            style={{ cursor: 'pointer' }}
            target="popup"
            onClick={() => {
              window.open(facebooklink, 'popup', 'width=600,height=600');
              return false;
            }}
          >
            <img
              style={{ width: '30px' }}
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="facebook"
            />
          </button>
          <button
            style={{ cursor: 'pointer' }}
            target="popup"
            onClick={() => {
              window.open(twitterlink, 'popup', 'width=600,height=600');
              return false;
            }}
          >
            <img
              style={{ width: '30px' }}
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter"
            />
          </button>
          <button href={emaillink}>
            <img
              style={{ width: '30px' }}
              src="https://img.icons8.com/color/48/000000/new-post.png"
              alt="email"
            />
          </button>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              copied(slug);
            }}
          >
            <img
              style={{ width: '30px' }}
              src="https://img.icons8.com/fluent/48/000000/copy.png"
              alt="copy to clipboard"
            />
          </button>
        </div>
        
      </div>
      </CardActions>
    </Card>
  );
};

export default Post;
