import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    theme => ({
        schoolInfoContainer: {
            [theme.breakpoints.up('md')]: {
                width: '50%',
                height: '100%',
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                height: 'auto',
                marginBottom: '20px'
            },
            padding: '0 20px'
        },
        schoolDesc: {
            margin: 0
        }
    })
)

function SchoolInfo({ currentSchool }: any) {
    const classes = useStyles();

    return (
        <div className={classes.schoolInfoContainer}>
            <h4 className={classes.schoolDesc}>Country: {currentSchool.country}</h4>
            <h4 className={classes.schoolDesc}>Website: <a href={currentSchool.web_pages.length > 0 ? currentSchool.web_pages[0] : '#'}>{currentSchool.web_pages.length > 0 ? currentSchool.web_pages[0] : 'N/A'}</a></h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ligula ut velit efficitur porttitor. Curabitur sodales,
                lectus nec accumsan fringilla, leo est semper velit, sit amet semper ipsum nunc dictum magna.
                Quisque tincidunt quis quam vitae facilisis. Aenean finibus convallis risus vel vestibulum. Donec ornare congue tincidunt.
                Proin quis imperdiet tellus. Praesent vulputate egestas metus dignissim efficitur. Etiam condimentum,
                felis tincidunt interdum ultrices, elit eros pellentesque metus, nec viverra metus massa ac urna. Fusce dapibus quis lacus at tempor.
                Morbi et enim nec augue molestie facilisis non ut massa. Curabitur efficitur neque ut nibh mollis facilisis.
                Sed diam nisi, sodales eget lobortis a, pulvinar eu justo. Vivamus dictum lorem a nisl interdum, id volutpat urna malesuada.
            </p>
        </div>
    )
}

export default SchoolInfo; 