import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AuthorPosts({ totalArticles }) {
  const classes = useStyles();

  return (
    <div className="flex flex-wrap justify-center mt-2">
      {totalArticles.nodes.map((article, i) => (
        <div className="mt-8 flex-shrink mx-2">
          <Card className={classes.root} key={i}>
            <CardContent>
              <h2 className="mb-4">{article.frontmatter.title}</h2>
              <p className="m-0">{article.frontmatter.description}</p>
            </CardContent>
            <CardActions className="justify-center">
              <Button size="medium">
                <Link to={`/${article.frontmatter.slug}`}>Sigue leyendo</Link>
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
