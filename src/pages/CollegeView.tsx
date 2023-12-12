import { makeStyles } from '@material-ui/core';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import SchoolContainer from '../components/SchoolContainer';

const useStyles = makeStyles(
    theme => ({
        pageContainer: {
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: '20px 0',
                overflow: 'auto',
            },
            [theme.breakpoints.up('md')]: {
                width: '90%',
                height: 'calc(100% - 20px)',
                padding: '20px 10px',
            },
            [theme.breakpoints.up('lg')]: {
                width: '80%',
            },
            overflow: 'hidden',
            height: 'auto',
            boxShadow: '0px 3px 5px rgba(0,0,0,0.3)',
            // display: 'flex',
            // flexDirection: 'column',
        }
    })
)

function CollegeView() {
    const classes = useStyles();
    const [currentSchool, setCurrentSchool] = useState(null);

    return (
        <div className={classes.pageContainer}>
            <NavBar currentSchool={currentSchool} setCurrentSchool={setCurrentSchool} />
            <SchoolContainer currentSchool={currentSchool} />
        </div>
    );
}

export default CollegeView;