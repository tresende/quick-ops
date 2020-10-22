import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
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
        fontSize: '.8rem',
    },
    description: {
        color: '#9ea4ac',
        fontSize: '.6rem',
    },
    cell: {
        padding: '6px 0px 6px 0',
    },
}));

const Summary = () => {
    const classes = useStyles();
    return (
        <div>
            <span className={classes.header}>Extrato</span>
            <hr className={classes.hr} />
            <Table size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader}>Descrição</TableCell>
                        <TableCell className={classes.tableHeader}>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>Despesas declaradas</div>
                            <div className={classes.description}>Despesas declaradas pelo trooper</div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>BRL 1.147,13</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>Despesas declaradas</div>
                            <div className={classes.description}>Despesas declaradas pelo trooper</div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>BRL 1.147,13</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.cell} scope="row">
                            <div className={classes.type}>Despesas declaradas</div>
                            <div className={classes.description}>Despesas declaradas pelo trooper</div>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                            <div className={classes.type}>BRL 1.147,13</div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default Summary;
