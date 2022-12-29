import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import "./SearchBox.scss"; 
import { useLocation } from 'react-router-dom';

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

export default function TruckMasterSearch(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { accountName } = location.state;

//   function setTruckSearch(event) {
//     console.log(event.target.value);
//     dispatch(eventActions.TruckMasterSearch(event.target.value, accountName));

//   }

  return (
    <div className="search">
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by License Number"
        inputProps={{ 'aria-label': '' }}
        onChange={(event) => props.handleSearchValue(event.target.value)}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
