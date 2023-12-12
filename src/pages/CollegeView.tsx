import { makeStyles } from '@material-ui/core';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import SchoolContainer from '../components/SchoolContainer';

const useStyles = makeStyles(
    theme => ({
        pageContainer: {
            height: 'calc(100% - 10px)',
            width: '80%',
            boxShadow: '0px 3px 5px rgba(0,0,0,0.3)',
            padding: '20px 10px',
            display: 'flex',
            flexDirection: 'column'
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