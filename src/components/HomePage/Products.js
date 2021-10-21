import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';

const DietaCard = styled.div`
  ${tw`border-gray-400 flex flex-col bg-white rounded-lg p-3 lg:p-6 xl:p-12 shadow-2xl border-4 w-full lg:w-3/6`}
`;

const Products = () => {
  return (
    <section className="mt-10">
      <div>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="bg-themeBrandColor border-4 w-full lg:w-1/2 shadow-2xl text-center flex sm:h-24 md:h-auto">
            <h2 className="m-auto">Guias para el cuidado de la Diabetes</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap">
              <DietaCard className="w-1/3">
                <Product1 />
              </DietaCard>
              <DietaCard className="w-1/3">
                <Product2 />
              </DietaCard>
            </div>
            <div className="flex flex-row flex-wrap">
              <DietaCard className="w-1/3">
                <Product3 />
              </DietaCard>
              <DietaCard className="w-1/3">
                <Product4 />
              </DietaCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
