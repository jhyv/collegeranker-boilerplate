import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';

const useStyles = makeStyles(
    theme => ({
        pageContainer: {
            minHeight: '80%',
            width: '80%',
            border: '1px solid #222'
        }
    })
)

function CollegeView() {
    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <NavBar />
            Implement here (in './src/pages/CollegeView.tsx')!

        </div>
    );
}

export default CollegeView;