import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

 class AddUser extends Component {
     state = {
         name:'',
         email:'',
         password:'',
     }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
      console.log(event.target);
      
      console.log("in submit");
      
  }

  render() {
      const {classes} = this.props;
      const {name, email, password} = this.state;

    return (
      <div>
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
          <Button variant="contained" onClick={this.handleSubmit} color="primary" className={classes.button}>
                Primary
            </Button>
        </form>
      </div>
    )
  }
}

// export default AddUser;
export default withStyles(styles)(AddUser);