import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles = makeStyles({
  form: {
    '@media (max-width: 475px)': {
      gridColumn: '1 / -1',
    },

    '@media (min-width: 476px)': {
      maxWidth: '400px',
    },
    marginLeft: '10px',
  },
  search: {
    width: '100%',
    background: 'white',
    color: '#5A5759',
    borderRadius: '11px',
    boxShadow:
      '0 13px 27px -5px rgb(50 50 93 / 35%), 0 8px 16px -8px rgb(0 0 0 / 40%), 0 -6px 16px -6px rgb(0 0 0 / 5%)',
    '&:active, &:focus, &:hover': {
      outline: '2px dotted black',
      boxShadow: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  redIcon: {
    color: '#b70610',
  },
});

export default function NavSearchBar({ searchTerm, setSearchTerm }) {
  const classes = useStyles();
  const handleChange = e => setSearchTerm(e.target.value);

  const clearSearch = () => setSearchTerm('');
  return (
    <form className={classes.form}>
      <OutlinedInput
        id="component-outlined"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search articles..."
        inputProps={{ 'aria-label': 'Type here to search articles' }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className={classes.redIcon} />
          </InputAdornment>
        }
        endAdornment={
          searchTerm ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="clear search entry"
                onClick={clearSearch}
                edge="end"
              >
                <ClearIcon className={classes.redIcon} />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        className={classes.search}
      />
    </form>
  );
}