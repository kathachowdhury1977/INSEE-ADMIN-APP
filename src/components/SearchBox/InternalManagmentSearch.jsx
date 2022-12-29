import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
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
  },

}));

export default function InternalManagmentSearch(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function setProductSearch(event) {
    console.log(event.target.value);
    dispatch(eventActions.InternalManagmentSearch(event.target.value));

  }

  return (
    <div className="search">
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': '' }}
        onChange={setProductSearch}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
