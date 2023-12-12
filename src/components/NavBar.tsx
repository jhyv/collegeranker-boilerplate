import { makeStyles, useMediaQuery } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUniversities } from '../api/university';
import SchoolItem from './SchoolItem';
import { Swiper, SwiperSlide } from 'swiper/react';

const useStyles = makeStyles(
    theme => ({
        navBarContainer: {
            width: '100%',
            height: '200px'
            // [theme.breakpoints.up('md')]: {
            //     minHeight: '200px',
            //     maxHeight: '200px',
            //     padding: '20px 0'
            // },
            // [theme.breakpoints.down('md')]: {
            //     minHeight: '200px',
            //     padding: '10px 0'
            // }
        },
        swiperContainer: {
            height: '100%',
            width: '100%',
            "& .swiper-wrapper .swiper-slide:first-child": {
                [theme.breakpoints.up('md')]: {
                    marginLeft: '40px'
                },
                marginLeft: '20px'
            }
        }
    })
)

function NavBar({ currentSchool, setCurrentSchool }: any) {
    const classes = useStyles();
    const [schools, setSchools] = useState([]);
    const matches = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        fetchUniverisities();
    }, []);

    const fetchUniverisities = async () => {
        const response: any = await getUniversities();
        setSchools(response);
    }

    return (
        <div className={classes.navBarContainer}>
            <Swiper
                className={classes.swiperContainer}
                spaceBetween={30}
                slidesPerView={matches ? 1.2 : 3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
                {
                    schools.map((school: any) => {
                        return (
                            <SwiperSlide>
                                <SchoolItem
                                    school={school}
                                    currentSchool={currentSchool}
                                    onClick={setCurrentSchool}
                                    key={`schoolItem${school.name.replace(/ /g, '')}`}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default NavBar;