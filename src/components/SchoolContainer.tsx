import { Fade, makeStyles } from "@material-ui/core";
import SchoolInfo from "./SchoolInfo";
import SchoolGrades from "./SchoolGrades";
import SchoolFooter from "./SchoolFooter";
import { useEffect, useState } from "react";
import YoutubeDialog from "./YoutubeDialog";

interface SchoolContainerProps {
    currentSchool: any
}

const useStyles = makeStyles(
    theme => ({
        schoolContainer: {
            [theme.breakpoints.up('md')]: {
                height: '80vh',
            },
            [theme.breakpoints.down('md')]: {
                height: '100vh',
            },
            flexGrow: 1,
            overflow: 'hidden',
            position: 'relative',
        },
        schoolHeader: {
            height: '60px',
            width: '100%',
            padding: '20px 10px',
        },
        schoolHeaderTitle: {
            margin: 0,
            fontSize: '30px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '20px',
                fontSize: '20px',
            }
        },
        schoolDetails: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexGrow: 1,
            [theme.breakpoints.down('md')]: {
                flexWrap: 'wrap',
            }
        },
        schoolInfo: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            [theme.breakpoints.down('md')]: {
                paddingBottom: '150px'
            }
        },
        schoolFooter: {
            backgroundColor: theme.palette.primary.main,
            height: '120px',
            padding: '10px',
            transition: '0.3s linear',
            [theme.breakpoints.up('sm')]: {
                position: 'absolute',
                bottom: '-140px',
                left: '0'
            },
            [theme.breakpoints.down('sm')]: {
                position: 'fixed',
                width: '100%',
                left: '-10px',
                bottom: '-100vh',
                height: '40vh',
            }
        },
        schoolFooterShow: {
            [theme.breakpoints.up('sm')]: {
                transform: 'translate(0,-265px)'
            },
            [theme.breakpoints.down('sm')]: {
                transform: 'translateY(-100vh)'
            }
        }
    })
)

function SchoolContainer({ currentSchool }: SchoolContainerProps) {
    const classes = useStyles();
    const [showPanel, setShowPanel] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className={classes.schoolContainer}>
            <Fade in={!!currentSchool}>
                {currentSchool != null ?
                    <div className={classes.schoolInfo}>
                        <div className={classes.schoolHeader}>
                            <h2 className={classes.schoolHeaderTitle}>{currentSchool.name}</h2>
                        </div>
                        <div className={classes.schoolDetails}>
                            <SchoolInfo currentSchool={currentSchool} />
                            <SchoolGrades showPanel={setShowPanel} />
                        </div>
                    </div> :
                    <div className={classes.schoolInfo}>
                    </div>
                }
            </Fade>
            <div className={`${classes.schoolFooter} ${showPanel && classes.schoolFooterShow}`}>
                <SchoolFooter currentSchool={currentSchool} closePanel={setShowPanel} setShowDialog={setShowDialog} />
            </div>
            <YoutubeDialog currentSchool={currentSchool} showDialog={showDialog} setShowDialog={setShowDialog} />
        </div>
    );
}

export default SchoolContainer;