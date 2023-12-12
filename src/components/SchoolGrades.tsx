import { Grid, Paper, makeStyles } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(
    theme => ({
        gradesContainer: {
            [theme.breakpoints.up('md')]: {
                width: '50%',
                height: '100%',
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                height: 'auto',
                marginBottom: '20px'
            },
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 20px'
        },
        gradesHeader: {
            padding: '10px',
            fontSize: 24,
            marginBottom: '20px',
        },
        gradesPaper: {
            width: '80%',
            padding: '20px'
        },
        gradesPaperLabel: {
            textAlign: 'center',
            height: '100px',
            fontSize: '20px',
            fontWeight: 500
        },
        gradesOptionBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            backgroundColor: theme.palette.primary.main,
            cursor: 'pointer'
        },
        gradesOptionIcon: {
            color: '#fff',
            fontSize: '24px'
        },
        gradesLabelColumn: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    })
)

function SchoolGrades({ showPanel }: any) {
    const classes = useStyles();

    const onOptionClick = () => {
        showPanel(true);
    }

    return (
        <div className={classes.gradesContainer}>
            <Paper className={classes.gradesPaper} elevation={3}>
                <div className={classes.gradesHeader}>
                    Grading System
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className={classes.gradesPaperLabel}>A</div>
                    </Grid>
                    <Grid item xs={8} className={classes.gradesLabelColumn}>
                        <div className={classes.gradesPaperLabel}>Diversity</div>
                        <div className={classes.gradesOptionBtn} onClick={onOptionClick}>
                            <MoreVertIcon className={classes.gradesOptionIcon} />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className={classes.gradesPaperLabel}>B+</div>
                    </Grid>
                    <Grid item xs={8} className={classes.gradesLabelColumn}>
                        <div className={classes.gradesPaperLabel}>Outcomes</div>
                        <div className={classes.gradesOptionBtn} onClick={onOptionClick}>
                            <MoreVertIcon className={classes.gradesOptionIcon} />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className={classes.gradesPaperLabel}>D-</div>
                    </Grid>
                    <Grid item xs={8} className={classes.gradesLabelColumn}>
                        <div className={classes.gradesPaperLabel}>Value</div>
                        <div className={classes.gradesOptionBtn} onClick={onOptionClick}>
                            <MoreVertIcon className={classes.gradesOptionIcon} />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default SchoolGrades; 