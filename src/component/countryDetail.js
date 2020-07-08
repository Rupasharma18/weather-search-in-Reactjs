import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Details(props) {
    const classes = useStyles();

    return (
        
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>country</StyledTableCell>
                        <StyledTableCell align="right">Country Name</StyledTableCell>
                        <StyledTableCell align="right">Capital</StyledTableCell>
                        <StyledTableCell align="right">Population</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {props.Data.map((item, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row">
                                <img src={item.flag} width='30%' alt={item.name}></img>
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.name}</StyledTableCell>
                            <StyledTableCell align="right">{item.capital}</StyledTableCell>
                            <StyledTableCell align="right">{item.population}</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">

                                <Link 
                                    to={{
                                            pathname: "weather",
                                            state: {
                                                data: item.capital,
                                            },
                                        }}
                                >
                                <Button variant="contained" color="secondary">
                                  weather
                                </Button>
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

