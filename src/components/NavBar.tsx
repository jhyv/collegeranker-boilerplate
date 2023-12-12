import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUniversities } from '../api/university';
import SchoolItem from './SchoolItem';

const useStyles = makeStyles(
    theme => ({
        navBarContainer: {
            width: '100%',
            height: '200px',
            border: '1px solid red',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflowX: 'auto',
            overflowY: 'hidden',
            padding: '10px 0'
        }
    })
)

function NavBar() {
    const classes = useStyles();
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetchUniverisities();
    }, []);

    const fetchUniverisities = async () => {
        const response: any = await getUniversities();
        setSchools(response);
    }

    return (
        <div className={classes.navBarContainer}>
            {
                schools.map((school: any) => {
                    return (
                        <SchoolItem school={school} key={`schoolItem${school.name.replace(/ /g, '')}`} />
                    )
                })
            }
        </div>
    );
}

export default NavBar;