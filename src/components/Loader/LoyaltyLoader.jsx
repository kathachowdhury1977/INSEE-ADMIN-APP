import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Loader.scss";
import LoyaltyImg from "../../assets/img/insee-loader.gif";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function LoyaltyLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="loading">
      <LoyaltyImg />
      </div> 
    </div>
  );
}