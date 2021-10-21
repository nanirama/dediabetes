import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import experts from '../data/experts.json';
import { makeStyles } from '@material-ui/core/styles';
import ExpertCard from '../components/ExpertCard';

const useStyles = makeStyles({
  grid: {
    gridTemplateColumns: 'repeat(2, minmax(290px, 375px))',
    '@media (max-width:640px)': {
      gridTemplateColumns: 'repeat(1, minmax(200px, 375px))',
    },
  },
});
export default function Experts() {
  let totalVerifiedArticles = useStaticQuery(
    graphql`
      query totalCount {
        allMdx(filter: { frontmatter: { verified: { eq: true } } }) {
          totalCount
        }
      }
    `
  );

  totalVerifiedArticles = totalVerifiedArticles.allMdx.totalCount;
  const classes = useStyles();
  return (
    <Layout>
      <SEO
        title="Nuestros Expertos"
        description="This page list all the experts who review articles on this website."
      />
      <main className="text-center mt-5">
        <h1>Nuestros Expertos</h1>
        <h4 className="my-8 px-2 max-w-xl mx-auto font-normal">
          To ensure our articles are accurate and up-to-date, we ask experienced
          doctors, nurses, registered dietitians, certified personal trainers
          and other credentialed experts to review articles that related to
          their files of expertise. In their reviews, these experts confirmed
          the information in an article is thorough and cities the latest in
          evidence-based research.
        </h4>
        <div className="grid grid-cols-2 divide-x divide-gray-500 my-4 justify-center">
          <p className="flex flex-col justify-self-end pr-8 text-2xl">
            {experts.length}
            <span className="text-base">Experts</span>
          </p>
          <p className="flex flex-col justify-self-start pl-8 text-2xl">
            {totalVerifiedArticles}
            <span className="text-base">Articles Reviewed</span>
          </p>
        </div>
      </main>
      <section
        className={`grid justify-center grid-flow-row-dense auto-rows-max gap-4 md:gap-8 px-4 ${classes.grid}`}
      >
        {experts.map((expert, i) => (
          <ExpertCard expert={expert} key={i} />
        ))}
      </section>
    </Layout>
  );
}
