
import React from 'react';
import './App.css';
import {
  makeStyles,
} from "@material-ui/core";


import CollegeView from './pages/CollegeView';

const useStyles = makeStyles(
  theme => ({
    pageView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw'
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.pageView}>
      <CollegeView />
    </div>
  );
}

export default App;