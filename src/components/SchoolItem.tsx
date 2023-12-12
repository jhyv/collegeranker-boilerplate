import { makeStyles } from "@material-ui/core";

interface SchoolItemProps {
    school: any;
    currentSchool?: any;
    onClick: (school: any) => void
}

const useStyles = makeStyles(
    theme => ({
        schoolItem: {
            display: 'inline',
            minWidth: '400px',
            height: '100%',
            marginRight: '20px',
            whiteSpace: 'nowrap',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '5px',
            padding: '10px',
            userSelect: 'none',
            cursor: 'pointer',
            transition: '0.3s ease-in-out'
        },
        schoolIcon: {
            height: '100px',
            width: '100px'
        },
        schoolText: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'right',
            margin: 0
        },
        schoolNotSelected: {
            opacity: '0.4'
        },
    })
)

function SchoolItem({ school, currentSchool, onClick }: SchoolItemProps) {
    const classes = useStyles();
    const onSchoolSelect = () => {
        currentSchool && school.name === currentSchool.name ? onClick(null) : onClick(school);
        const el = document.getElementById(getSchoolId());
        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }

    const getSchoolId = () => `schoolItem${school.name.replace(/ /g, '')}`

    return (
        <div
            id={getSchoolId()}
            onClick={onSchoolSelect}
            className={`${classes.schoolItem} ${currentSchool && currentSchool.name !== school.name && classes.schoolNotSelected}`}>
            <p className={classes.schoolText}>{school.name}</p>
        </div>
    );
}

export default SchoolItem;