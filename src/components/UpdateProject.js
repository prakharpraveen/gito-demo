import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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

class UpdateProject extends React.Component {
    state = {
        name: "",
        description: "",
        image: "",
        technology: "",
        link: "",
        team: "",
        _id: ""
    };

    componentDidMount() {
        const { project = {} } = this.props
        this.setState({ 
        name: project.name,
        description: project.description,
        image: project.image,
        technology: project.technology,
        link: project.link,
        team: project.team,
        _id: project._id
         });
    }

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

    updateProject = () => {
        const { name, description, image, link, team, technology } = this.state;
        const { login, project } = this.props;

        axios({
            method: 'put',
            url: 'https://mk-api.herokuapp.com/resume/project/' + project._id,
            headers: { "Authorization": login },
            data: {
                "name": name,
                "description": description,
                "image": image,
                "technology": technology,
                "link": link,
                "team": team
            }
        })      
        .then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { classes, isUpdateProject, closeUpdateProject } = this.props;
        const { name, description, image, link, team, technology } = this.state;

        return (
            <div>
                <Dialog
                    maxWidth={"md"}
                    open={isUpdateProject}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"UpdateProject"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label="name"
                                className={classes.textField}
                                value={name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="description"
                                label="description"
                                className={classes.textField}
                                value={description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="image"
                                label="image"
                                className={classes.textField}
                                value={image}
                                onChange={this.handleChange('image')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="technology"
                                label="technology"
                                className={classes.textField}
                                value={technology}
                                onChange={this.handleChange('technology')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="link"
                                label="link"
                                className={classes.textField}
                                value={link}
                                onChange={this.handleChange('link')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="team"
                                label="team"
                                className={classes.textField}
                                value={team}
                                onChange={this.handleChange('team')}
                                margin="normal"
                                variant="outlined"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => closeUpdateProject()} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.updateProject} color="primary" autoFocus>
                            Update Project
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(UpdateProject);

