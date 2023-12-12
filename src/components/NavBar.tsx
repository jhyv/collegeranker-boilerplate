import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUniversities } from '../api/university';
import SchoolItem from './SchoolItem';

const useStyles = makeStyles(
    theme => ({
        navBarContainer: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'flex-start',
            overflowX: 'auto',
            overflowY: 'hidden',
            [theme.breakpoints.up('md')]: {
                minHeight: '200px',
                maxHeight: '200px',
                padding: '20px 0'
            },
            [theme.breakpoints.down('md')]: {
                minHeight: '200px',
                padding: '10px 0'
            }
        }
    })
)

function NavBar({ currentSchool, setCurrentSchool }: any) {
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
                        <SchoolItem
                            school={school}
                            currentSchool={currentSchool}
                            onClick={setCurrentSchool}
                            key={`schoolItem${school.name.replace(/ /g, '')}`}
                        />
                    )
                })
            }
        </div>
    );
}

export default NavBar;