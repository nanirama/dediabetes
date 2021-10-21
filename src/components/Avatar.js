import React from 'react';
import authors from '../data/authors.json';

const tryRequire = file => {
  try {
    return require(`/static/${file}`);
  } catch (err) {
    return null;
  }
};

const Avatar = ({ id, authorPage }) => {
  let thisAuthor = authors.filter(author => author.id === id);

  thisAuthor = thisAuthor[0];
  let authorPic;

  if (thisAuthor) authorPic = tryRequire(thisAuthor?.headshot);

  if (!authorPic) {
    authorPic = tryRequire('author_std.jpg');
  }
  if (authorPage) {
    return (
      <div
        className="rounded-full overflow-hidden mx-auto mb-4"
        style={{ width: '200px', height: '200px' }}
      >
        <img
          src={authorPic}
          className="object-cover object-center w-full h-full"
          alt="author"
        />
      </div>
    );
  } else
    return (
      <div
        className="border-4 border-themeBrandColor rounded-full overflow-hidden shadow-inner mr-2"
        style={{ width: '48px', height: '48px', minWidth: '48px' }}
      >
        <img
          src={authorPic}
          className="object-cover object-center w-full h-full"
          alt="author"
        />
      </div>
    );
};

export default Avatar;
