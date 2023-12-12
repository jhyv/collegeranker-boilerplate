import { makeStyles } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(
    theme => ({
        schoolFooterContainer: {
            width: '100%',
            height: '100%',
        },
        schoolFooterHeader: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        schoolFooterContent: {
            color: '#fff',
            padding: '5px 10px',
            textAlign: 'justify'
        },
        schoolFooterIcon: {
            color: '#fff',
            fontSize: '30px'
        },
        schoolFooterBtn: {
            cursor: 'pointer',
            padding: '5px'
        }
    })
)

function SchoolFooter({ currentSchool, closePanel, setShowDialog }: any) {
    const classes = useStyles();

    const onCloseClick = () => {
        closePanel(false);
    }

    const onInfoClick = () => {
        setShowDialog(true);
    }
    return (
        <div className={classes.schoolFooterContainer}>
            <div className={classes.schoolFooterHeader}>
                <div className={classes.schoolFooterBtn} onClick={onInfoClick}>
                    <InfoIcon className={classes.schoolFooterIcon} />
                </div>
                <div className={classes.schoolFooterBtn} onClick={onCloseClick}>
                    <CloseIcon className={classes.schoolFooterIcon} />
                </div>
            </div>
            <div className={classes.schoolFooterContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ligula ut velit efficitur porttitor. Curabitur sodales,
                lectus nec accumsan fringilla, leo est semper velit, sit amet semper ipsum nunc dictum magna.
                Quisque tincidunt quis quam vitae facilisis. Aenean finibus convallis risus vel vestibulum. Donec ornare congue tincidunt.
                Proin quis imperdiet tellus. Praesent vulputate egestas metus dignissim efficitur. Etiam condimentum,
            </div>
        </div>
    );
}

export default SchoolFooter;