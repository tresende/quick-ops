import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextTranslated from '../TextTranslated';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ open: true });
        this.logError(error, info);
    }

    // eslint-disable-next-line class-methods-use-this
    logError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        if (this.state.open) {
            return (
                <>
                    { this.state.open
                        && (
                            <Dialog
                              open={this.state.open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={this.handleClose.bind(this)}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle id="alert-dialog-slide-title">
                                    <TextTranslated code="errorTitle" />
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        <TextTranslated code="errorBody" />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose.bind(this)} color="primary">
                                        <TextTranslated code="close" />
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        )
                    }
                    {this.props.children}
                </>
            );
        }
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.object.isRequired,
};

export default ErrorBoundary;
