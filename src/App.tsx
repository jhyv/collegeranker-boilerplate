
import React, { useReducer } from 'react';
import './App.css';
import { makeStyles } from "@material-ui/core";
import CollegeView from './pages/CollegeView';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const useStyles = makeStyles(
  theme => ({
    pageView: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw'
    },
    "@global": {
      "*::-webkit-scrollbar": {
        width: 7,
      },
      "*::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",

        borderRadius: '5px',
        outline: `1px solid slategrey`,
      },
    }
  })
);


function App() {
  const classes = useStyles();

  return (
    <div className={classes.pageView}>
      <AppHeader />
      <CollegeView />
      <AppFooter />
    </div>
  );
}

export default App;