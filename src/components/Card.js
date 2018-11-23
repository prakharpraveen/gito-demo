import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import UpdateProject from './UpdateProject';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  project: {}
};

class  GitoCard extends Component{
  state = {isUpdateProject: false}
  onUpdate = (project) => this.setState({isUpdateProject: true, project});
  closeUpdateProject = () => this.setState({isUpdateProject: false, project:{}});
  render() {
    const { classes, project, login, setLogIn } = this.props;
    const { isUpdateProject } = this.state;
    return (
    <div>
    <UpdateProject login={login} setLogIn={setLogIn} isUpdateProject={isUpdateProject} project={project} closeUpdateProject={this.closeUpdateProject}/>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography component="p">
            {project.description}
          </Typography>
          <Typography component="p">
          technology: {project.technology}
          </Typography>
          <Typography component="p">
          team: {project.team}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => this.onUpdate(project)}>
          Update
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </div>
  );
}}

export default withStyles(styles)(GitoCard);
