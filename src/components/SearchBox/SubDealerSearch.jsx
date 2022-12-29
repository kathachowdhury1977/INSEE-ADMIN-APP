import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBox.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 1px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    marginRight: '4px',
  },

}));

const SubDealerSearch = (props) => {
  const classes = useStyles();

  return (
    <div className="search" style={{width: "50%", marginRight: "5px"}}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder={'Search by Sub Dealer'}
          inputProps={{ 'aria-label': '' }}
          onChange={(event) => props.handleSearchValue(event.target.value)}
          value = {props.defaultValue}
        />
        <IconButton className={classes.iconButton} aria-label="search" style={{marginRight: "-1px"}}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SubDealerSearch