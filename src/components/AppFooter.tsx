import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    theme => ({
        appFooter: {
            height: '65px',
            width: '100%',
            backgroundColor: theme.palette.primary.main
        }
    })
)
function AppFooter() {
    const classes = useStyles();

    return (
        <div className={classes.appFooter}>

        </div>
    );
}

export default AppFooter;