import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    theme => ({
        schoolInfoContainer: {
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '0 20px'
        }
    })
)

function SchoolInfo(props: any) {
    const classes = useStyles(props);

    return (
        <div className={classes.schoolInfoContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ligula ut velit efficitur porttitor. Curabitur sodales,
            lectus nec accumsan fringilla, leo est semper velit, sit amet semper ipsum nunc dictum magna.
            Quisque tincidunt quis quam vitae facilisis. Aenean finibus convallis risus vel vestibulum. Donec ornare congue tincidunt.
            Proin quis imperdiet tellus. Praesent vulputate egestas metus dignissim efficitur. Etiam condimentum,
            felis tincidunt interdum ultrices, elit eros pellentesque metus, nec viverra metus massa ac urna. Fusce dapibus quis lacus at tempor.
            Morbi et enim nec augue molestie facilisis non ut massa. Curabitur efficitur neque ut nibh mollis facilisis.
            Sed diam nisi, sodales eget lobortis a, pulvinar eu justo. Vivamus dictum lorem a nisl interdum, id volutpat urna malesuada.
        </div>
    )
}

export default SchoolInfo; 