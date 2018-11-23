import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LogIn from './LogIn';
import SinghUp from './SinghUp';
import GitoCard from './Card';
import AddProject from './AddProject';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const styles = theme=> ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class LandingPage extends Component {

  state = {
    isRegister: false,
    isLogIn: false,
    isAddProject: false,
    projects: []
  }

  componentWillMount() {
    axios.get(('https://mk-api.herokuapp.com/resume/project/all'))
    .then((res) => {
      console.log(res);

      this.setState({projects: res.data});
      
    }).catch((error) => {
      console.log(error);
    });
  }

  onRegister = () => this.setState({ isRegister: true });

  closeRegister = () => this.setState({ isRegister: false });

  onLogIn = () => this.setState({ isLogIn: true });

  closeLogIn = () => this.setState({ isLogIn: false });

  onAddProject = () => this.setState({isAddProject: true});
  
  closeAddProject = () => this.setState({isAddProject: false});

  render() {
    const { classes, login, setLogIn } = this.props;
    const { isLogIn, isRegister, projects, isAddProject } = this.state;
    return (
      <div className={classes.root}>
        {login.length === 0 &&
        <div><SinghUp isRegister={isRegister} closeRegister={this.closeRegister} />
        <LogIn isLogIn={isLogIn} closeLogIn={this.closeLogIn} setLogIn={setLogIn} />
        </div>}
        <AddProject login={login} isAddProject={isAddProject} closeAddProject={this.closeAddProject} />
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={this.onAddProject}>Add Project</Button>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Gito Demo
          </Typography>
            <Button color="inherit" onClick={this.onLogIn}>Login</Button>
            <Button color="inherit" onClick={this.onRegister}>Register</Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.root} spacing={16}>
        {
          projects.map((project) => {
            return <Grid key={project._id} item md={4} sm={4} xm={4}>
            <GitoCard project={project} login={login} setLogIn={setLogIn}/>
            </Grid>
          })
        }
        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(LandingPage);
