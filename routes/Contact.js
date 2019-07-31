import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MailIcon from "@material-ui/icons/Mail";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const styles = theme => ({
    layout: {
        width: "auto",
        display: "block", // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 15,
        marginBottom: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            3}px ${theme.spacing.unit * 3}px`,
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing.unit * 10
        }
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            contact: "",
            title: "",
            message: "",

            open: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        console.log(event.target.name, " : " + event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    Transition(props) {
        return <Slide direction="up" {...props} />;
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <MailIcon />
                        </Avatar>
                        <Typography variant="headline">Contact</Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="nameInput">
                                    이름
                                </InputLabel>
                                <Input
                                    id="nameInput"
                                    name="name"
                                    onChange={this.handleChange}
                                    required
                                    autoFocus
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="contactInput">
                                    연락처
                                </InputLabel>
                                <Input
                                    id="contactInput"
                                    name="contact"
                                    onChange={this.handleChange}
                                    required
                                />
                                <FormHelperText id="contactInput-text">
                                    이메일이나 전화번호를 넣어주세요
                                </FormHelperText>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="titleInput">
                                    제목
                                </InputLabel>
                                <Input
                                    id="titleInput"
                                    name="title"
                                    onChange={this.handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="contentsInput">
                                    내용
                                </InputLabel>
                                <Input
                                    multiline
                                    id="titleInput"
                                    name="message"
                                    onChange={this.handleChange}
                                    required
                                />
                            </FormControl>
                            {/*
                                버튼 태그 안에 이거 넣어야 됨
                                type="submit"
                            */}
                            <Button
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.sendButton}
                                onClick={this.handleSubmit}
                            >
                                <Icon className={classes.rightIcon}>send</Icon>
                                Send
                            </Button>
                            <Dialog
                                open={this.state.open}
                                TransitionComponent={this.Transition}
                                keepMounted
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    {
                                        "죄송합니다. 현재 기능이 구현되어 있지 않습니다."
                                    }
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        현재 기능이 구현되어 있지 않습니다. 만약
                                        저에게 문의사항이 있으시다면
                                        <br />
                                        <br />
                                        <br />
                                        이메일 : bhj2849@naver.com
                                        <br />
                                        <br />
                                        <br />로 연락 주시면 성심 성의 껏
                                        말씀드리겠습니다.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        onClick={this.handleClose}
                                        color="primary"
                                    >
                                        확인
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
