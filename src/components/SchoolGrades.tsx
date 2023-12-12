import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    theme => ({
        gradesContainer: {
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 20px'
        },
        gradesPaper: {
            height: '300px',
            width: '80%',
            padding: '20px'
        },
        gradesPaperLabel: {
            textAlign: 'center',
            height: '100px',
            fontSize: '20px',
            fontWeight: 500
        }
    })
)

function SchoolGrades() {
    const classes = useStyles();
    return (
        <div className={classes.gradesContainer}>
            <Paper className={classes.gradesPaper} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>A</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>Diversity</div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>B+</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>Outcomes</div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>D-</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.gradesPaperLabel}>Value</div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default SchoolGrades; 