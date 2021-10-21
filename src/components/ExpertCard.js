import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
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
  hideText: {
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
});

export default function ExpertCard({ expert }) {
  const [showText, setShowText] = React.useState(false);

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>
          {expert.name}
          {`${expert.certifications}` ? `, ${expert.certifications}` : ''}
        </h2>
        <div className="text-center">
          {expert['linkedIn'] ? (
            <a href={expert['linkedIn']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${expert.name} LinkedIn`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
          {expert['personalink'] ? (
            <a href={expert['personalink']} target="_blank" rel="noreferrer">
              <IconButton
                aria-label={`${expert.name} personal website`}
                style={{
                  color: theme.palette.info.main,
                }}
              >
                <LaunchIcon />
              </IconButton>
            </a>
          ) : (
            ''
          )}
          {!expert['linkedin'] && !expert['personalink'] ? (
            <span
              style={{ fontSize: '48px', lineHeight: '2.5rem', opacity: 0 }}
            >
              A
            </span>
          ) : (
            ''
          )}
        </div>
        <p className={clsx('m-0', !showText && classes.hideText)}>
          {expert.description}
        </p>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={() => setShowText(!showText)}>
          Mas Información
        </Button>
      </CardActions>
    </Card>
  );
}
