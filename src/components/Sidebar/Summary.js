import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';
import { formatCurrency } from '../../services/Util';
import TextTranslated from '../TextTranslated';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '2px solid #fafbfc',
        borderTop: 'none',
        borderBottom: 'none',
        ...theme.mixins.center,
        flexDirection: 'column',
    },
    header: {
        fontSize: '.8rem',
        fontWeight: 'bold',
    },
    hr: {
        borderTop: '1px solid #f0f3f7',
    },
    tableHeader: {
        fontSize: '.7rem',
        color: '#053d4e',
        padding: '6px 0px 6px 0',
    },
    type: {
        fontWeight: 'bold',
        color: '#053d4e',
        fontSize: '.7rem',
    },
    description: {
        color: '#9ea4ac',
        fontSize: '.6rem',
    },
    cell: {
        padding: '6px 0px 6px 0',
    },
}));

const Summary = ({ data }) => {
    const classes = useStyles();
    return (
        <div>
            <span className={classes.header}>
                <TextTranslated code="suammryLabel" />
            </span>
            <hr className={classes.hr} />
            <Table size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader}>
                            <TextTranslated code="description" />
                        </TableCell>
                        <TableCell className={classes.tableHeader}>
                            <TextTranslated code="value" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>
                                <TextTranslated code="declaredTitle" />
                            </div>
                            <div className={classes.description}>
                                <TextTranslated code="declaredTitleByTrooper" />
                            </div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>{formatCurrency(data.declared, data.currency.code)}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>
                                <TextTranslated code="approvedExpense" />
                            </div>
                            <div className={classes.description}>
                                <TextTranslated code="approvedExpenseByFin" />
                            </div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>{formatCurrency(data.approved, data.currency.code)}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>
                                <TextTranslated code="realizedExpense" />
                            </div>
                            <div className={classes.description}>
                                <TextTranslated code="realizedExpenseByFin" />
                            </div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>{formatCurrency(data.received, data.currency.code)}</div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

Summary.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Summary;
