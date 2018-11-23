import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
  });

class SinghUp extends React.Component {
    state = {
        open: false,
        name:'',
        email:'',
        password:'',
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    register = () => {
        const {name, email, password} = this.state;
        
        axios.post('https://mk-api.herokuapp.com/resume/auth/register', {name, email, password}).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { classes, isRegister, closeRegister } = this.props;
          const {name, email, password} = this.state;

        return (
            <div>
                <Dialog
                    maxWidth={"md"}
                    open={isRegister}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Register"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="Email"
                                label="Email"
                                className={classes.textField}
                                value={email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="Password"
                                label="Password"
                                className={classes.textField}
                                value={password}
                                onChange={this.handleChange('password')}
                                margin="normal"
                                variant="outlined"
                            />
                           
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => closeRegister()} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.register} color="primary" autoFocus>
                            Register
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(SinghUp);

