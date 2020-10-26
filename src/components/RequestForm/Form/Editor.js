import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Select, TextField } from '@material-ui/core';
import { getTranslate } from '../../../services/Util';

const useStyles = makeStyles((theme, width) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 8,
        width,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    inputForm: {
        '& select': {
            paddingTop: 10.5,
            paddingBottom: 10.5,
        },
    },
}));

const Editor = ({ onChange, label, size, type, values }) => {
    const width = `${size}%`;
    const classes = useStyles(width);

    const onValueChanged = (value) => onChange(value);

    const createEditor = () => {
        switch (type) {
            case 'select': {
                return (
                    <Select
                      onChange={(e) => onValueChanged(e.target.value)}
                      className={classes.inputForm}
                      native
                      size="small"
                      variant="outlined"
                    >
                        <option value="">{label.replace(' *', '')}</option>
                        {
                            values.map((option) => <option key={option} value={option}>{getTranslate(option)}</option>)
                        }
                    </Select>
                );
            }
            default:
                return (
                    <TextField
                      onChange={(e) => onValueChanged(e.target.value)}
                      size="small"
                      variant="outlined"
                      placeholder={label}
                      type={type}
                    />
                );
        }
    };
    return (
        <div className={classes.root}>
            <span className={classes.label}>{label}</span>
            {createEditor()}
        </div>
    );
};

Editor.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string,
    values: PropTypes.array,
};

Editor.defaultProps = {
    type: 'text',
    values: [],
};

export default Editor;
