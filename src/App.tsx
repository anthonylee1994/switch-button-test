import {Checkbox, createMuiTheme, FormControlLabel, Grid, makeStyles, MuiThemeProvider, Paper, Typography} from "@material-ui/core";
import {blue, grey} from "@material-ui/core/colors";
import React, {useState} from "react";
import {FormattedMessage, useIntl} from "react-intl";
import Switch from "Switch";

const App = () => {
    const {formatMessage} = useIntl();
    const classes = useStyles();
    const [isSwitchChecked, setSwitchChecked] = useState(false);
    const [isSwitchDisabled, setSwitchDisabled] = useState(false);

    const onToggleDisable = () => {
        setSwitchDisabled(!isSwitchDisabled);
    };

    const onChange = (checked: boolean) => {
        setSwitchChecked(checked);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle1">
                                <FormattedMessage id="type.controlled" />
                            </Typography>
                            <Switch checked={isSwitchChecked} disabled={isSwitchDisabled} onChange={onChange} />
                            <FormControlLabel label={formatMessage({id: "toggle.disabled"})} control={<Checkbox color="primary" onClick={onToggleDisable} checked={isSwitchDisabled} />} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle1">
                                <FormattedMessage id="type.uncontrolled" />
                            </Typography>
                            <Switch uncontrolled />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00a3fc",
        },
    },
});

const useStyles = makeStyles((theme: any) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: grey[100],
        width: "100vw",
        height: "100vh",
    },
    container: {
        maxWidth: 300,
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    },
}));

export default App;
