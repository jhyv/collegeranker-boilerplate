
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";


import CollegeView from './pages/CollegeView';
import NavBar from './components/NavBar';

function App() {
      return (
        <CollegeView />
      );
}

export default App;