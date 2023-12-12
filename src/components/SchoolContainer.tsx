import { makeStyles } from "@material-ui/core";
import SchoolInfo from "./SchoolInfo";
import SchoolGrades from "./SchoolGrades";

interface SchoolContainerProps {
    currentSchool: any
}

const useStyles = makeStyles(
    theme => ({
        schoolContainer: {
            flexGrow: 1,
            padding: '10px'
        },
        schoolHeader: {
            height: '60px'
        },
        schoolHeaderTitle: {
            margin: 0,
            fontSize: '30px'
        },
        schoolDetails: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexGrow: 1,
        },
        schoolInfo: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
        }
    })
)

function SchoolContainer({ currentSchool }: SchoolContainerProps) {
    const classes = useStyles();

    return (
        <div className={classes.schoolContainer}>
            {currentSchool &&
                <div className={classes.schoolInfo}>
                    <div className={classes.schoolHeader}>
                        <h2 className={classes.schoolHeaderTitle}>{currentSchool.name}</h2>
                    </div>
                    <div className={classes.schoolDetails}>
                        <SchoolInfo />
                        <SchoolGrades />
                    </div>
                </div>
            }
        </div>
    );
}

export default SchoolContainer;