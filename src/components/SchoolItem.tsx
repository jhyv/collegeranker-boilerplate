import { makeStyles } from "@material-ui/core";
import { ICON_ENDPOINT } from "../constants/endpoints";

interface SchoolItemProps {
    school: any;
}

const useStyles = makeStyles(
    theme => ({
        schoolItem: {
            display: 'inline',
            minWidth: '400px',
            height: '100%',
            marginRight: '20px',
            border: '1px solid blue',
            whiteSpace: 'nowrap'
        },
        schoolIcon: {
            height: '100px',
            width: '100px'
        }
    })
)

function SchoolItem({ school }: SchoolItemProps) {
    const classes = useStyles()
    return (
        <div className={classes.schoolItem}>
            <p>{school.name}</p>
        </div>
    );
}

export default SchoolItem;