import React, { useEffect, useState } from 'react';
import useFirebase from '../components/firebase/useFirebase';
import Layout from '../components/Layout';
import Perfils from '../components/Perfil';
import SEO from '../components/SEO';

const Perfil = () => {
  const { auth, db } = useFirebase();

  // unknown value is to avoid flashing since on first render user auth stage is unkown
  const [userContent, setUserContent] = useState('unknown');
  const [popularContent, setPopularContent] = useState([]);

  useEffect(() => {
    const unregisterAuth = auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              setUserContent(doc.data());
            }
          });
      } else setUserContent(null);
    });

    const content = {
      posts: [],
      recipes: [],
    };

    const topPosts = db
      .collection('posts')
      .orderBy('bookmarks', 'desc')
      .limit(5)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          content.posts.push({
            slug: doc.id,
            ...doc.data(),
          });
        });
      });

    const topRecipes = db
      .collection('recipes')
      .orderBy('bookmarks', 'desc')
      .limit(5)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          content.recipes.push({
            slug: doc.id,
            ...doc.data(),
          });
        });
      });

    Promise.allSettled([topPosts, topRecipes]).then(() =>
      setPopularContent(content)
    );

    return () => {
      unregisterAuth();
    };
  }, [auth, db]);

  return (
    <Layout>
      <SEO title="Your Profile Page" />
      {userContent === 'unknown' ? (
        ''
      ) : userContent ? (
        <Perfils userContent={userContent} popularContent={popularContent} />
      ) : (
        <h1 style={{ textAlign: 'center', margin: '32px auto' }}>
          Debes iniciar sesión para ver esta página. <br /> <br />
          Haga clic en el botón de perfil (arriba derecha) para iniciar sesión
        </h1>
      )}
    </Layout>
  );
};
export default Perfil;
