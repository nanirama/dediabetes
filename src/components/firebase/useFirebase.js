import React from 'react';
import FirebaseContext from './FirebaseContext';

export default function useFirebase() {
  const all = React.useContext(FirebaseContext);
  let firebase, auth, db;
  if (typeof window !== 'undefined') {
    firebase = all.firebase;
    auth = all.auth;
    db = all.db;
  }
  return { firebase, auth, db };
}
