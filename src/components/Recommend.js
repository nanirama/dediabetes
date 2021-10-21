import React, { useState } from 'react';
import Halfpage from '../components/Advertising/Halfpage';
import Sidebar1Desktop from '../components/Advertising/Sidebar1Desktop';
import TopHomepage from '../components/Advertising/TopHomepage';
import TopHomepageMob from '../components/Advertising/TopHomepageMob';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SubscribeSide from '../components/Subscribe/SideOptIn';

const Recommend = ({ data }) => {
  //   const {
  //     allMdx: { nodes: posts },
  //   } = data;
  //   const {
  //     allRecipesJson: { nodes: recipes },
  //   } = data;
  const [values, setValue] = useState('');
  const [type, setType] = useState('');
  // const [rec, setRec] = useState('');

  const email = ` mailto:recommend@dediabetes.com?subject=i%20recommend%20a%20${type}:%20${values}&?body=0`;
  return (
    <Layout>
      <SEO
        description="Tu fuente de información para el cuidado de la diabetes. Te brindamos herramientas y educación para el manejo de la diabetes y sus complicaciones"
        type="website"
      />
      <div className="grid grid-cols-1 w-full">{/* <Hero showPerson /> */}</div>
      <div className="md:flex flex-row justify-center m-6 hidden md:visible">
        <TopHomepage />
      </div>
      <div className="flex flex-row justify-center mt-6 md:hidden ">
        <TopHomepageMob />
      </div>

      <div className="grid grid-cols-blog w-full container mx-auto">
        <div className="col-span-2 md:col-span-1 -mb-6">
          <h1 style={{ marginBottom: '20px' }}>RECOMIENDA UN ENLACE</h1>
          <div
            style={{
              border: '1px solid black',
              padding: '70px 10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '70%',
            }}
          >
            <div style={{ margin: '0 10%' }}>
              <label htmlFor="recommend-input">URL: </label>
              <input
                type="url"
                id="homepage"
                placeholder="URL"
                value={values}
                onChange={e => {
                  setValue(e.target.value);
                }}
                style={{ border: '1px solid black', padding: '5px 10px' }}
              ></input>
            </div>{' '}
            <div
              style={{
                display: 'flex',
                margin: '20px 4%',
              }}
            >
              <label htmlFor="recommend-radio">CATEGORIA: </label>
              <div style={{ marginLeft: '10px' }}>
                <div>
                  <input
                    type="radio"
                    id="recommend-recipe"
                    name="recommend-radio"
                    onChange={() => {
                      setType('Articulos');
                    }}
                  ></input>
                  <label htmlFor="recommend-recipe">Articulos </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="recommend-article"
                    name="recommend-radio"
                    onChange={() => {
                      setType('Recetas');
                    }}
                  ></input>
                  <label htmlFor="recommend-article">Recetas</label>
                </div>
              </div>
            </div>
            <a
              style={{
                margin: '0 auto',
                border: '1px solid black',
                padding: '5px 10px',
              }}
              href={email}
            >
              SUMBIT
            </a>
          </div>
        </div>
        <div className="hidden md:block md:visible mx-autoleading-losse shadow-2xl">
          <SubscribeSide />
          <div className="my-3">
            <Sidebar1Desktop />
          </div>
          <div className="my-3">
            <Halfpage />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recommend;
