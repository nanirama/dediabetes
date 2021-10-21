import { MDXProvider } from '@mdx-js/react';
import 'elegant-icons/style.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import { Blockquote, Code, List } from './src/components/Complete';
import FirebaseContext from './src/components/firebase/FirebaseContext';
import './src/css/index.css';

firebase.initializeApp({
  apiKey: 'AIzaSyDC1a7sLGd6pKRH7hLIREnOrptFHMYG9nI',
  authDomain: 'dediabetes-ff322.firebaseapp.com',
  databaseURL: 'https://dediabetes-ff322-default-rtdb.firebaseio.com',
  projectId: 'dediabetes-ff322',
  storageBucket: 'dediabetes-ff322.appspot.com',
  messagingSenderId: '696279229394',
  appId: '1:696279229394:web:da3547c092c0a842945e0b',
});

const components = {
  inlineCode: Code,
  blockquote: Blockquote,
  ul: List.UList,
  ol: List.OList,
};

const App = ({ root }) => {
  const auth = firebase.auth();
  const db = firebase.firestore();

  return (
    <FirebaseContext.Provider value={{ firebase, auth, db }}>
      <MDXProvider components={components}>{root}</MDXProvider>
    </FirebaseContext.Provider>
  );
};

export const wrapRootElement = ({ element }) => <App root={element} />;
