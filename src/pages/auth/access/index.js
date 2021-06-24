import styles from "./styles.js";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxHeight: '60%',
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        boxSizing: 'content-box',
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function NewWallet() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <div style={styles.content}>
            <Card className={classes.root}>
                <Typography style={{textAlign: 'center'}} gutterBottom variant="h4" component="h2">
                    Please enter 12 words
                </Typography>
                <div style={{marginTop: 20, width: '100%'}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="12 Words"
                        multiline
                        rows={4}
                        style={{width: '100%'}}
                        variant="outlined"
                    />
                </div>
                <div style={{marginTop: 20}}>
                    <button onClick={() => history.push('/upload')} style={{ backgroundColor: "#62d7c5", height: 50, width: 150, border: '1px solid #62d7c5', color: 'white', borderRadius: 5, fontFamily: 'Roboto', fontSize: 16}}>
                        SUBMIT
                    </button>
                </div>
                <div style={{marginTop: 20}}>
                    <Button size="large" color="primary" onClick={() => history.push('/new-wallet')}>
                        NEW WALLET
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default NewWallet;
