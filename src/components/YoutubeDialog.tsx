import { Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, useMediaQuery } from "@material-ui/core";
import { YOUTUBE_LINKS } from "../constants/dummyData";

const useStyles = makeStyles(
    theme => ({
        youtubeIframe: {
            height: '70vh',
            width: '100%',
        },
        dialogContent: {
            overflow: 'hidden',
            [theme.breakpoints.down('md')]: {
                padding: 0
            }
        }
    })
)

function YoutubeDialog({ currentSchool, showDialog, setShowDialog }: any) {
    const handleClose = () => {
        setShowDialog(false)
    }
    const matches = useMediaQuery('(max-width:900px)');
    const classes = useStyles();

    return (
        <Dialog
            maxWidth={'xl'}
            fullWidth
            fullScreen={matches}
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{currentSchool?.name}</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <iframe className={classes.youtubeIframe} src={YOUTUBE_LINKS[0]} allowFullScreen></iframe>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default YoutubeDialog;