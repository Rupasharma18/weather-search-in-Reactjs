import React, { Component } from 'react'
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

class Weather extends Component {
constructor(props){
    super(props)
    this.state={
        weatherInfo:[]
    }
}

async componentDidMount(){
   await Axios.get('http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query='+this.props.location.state.data)
   .then((res)=>{
       this.setState({
           weatherInfo:res.data.current
       })
   })
 
}


    render() {
       
        const { classes } = this.props
        return (
            <div className={classes.divs}>
                <Typography variant="h4" component="h2" className={classes.text}>Weather of {this.props.location.state.data}</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="caption table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Weather</StyledTableCell>
                        <StyledTableCell align="right">Temperature</StyledTableCell>
                        <StyledTableCell align="right">Wind Speed</StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                     
                    </TableRow>
                </TableHead>
                        <TableBody>
                            <TableCell><img alt='coming soon' src={this.state.weatherInfo.weather_icons} /></TableCell>
                            <TableCell align="right">{this.state.weatherInfo.temperature}</TableCell>
                            <TableCell align="right">{this.state.weatherInfo.wind_speed}</TableCell>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}
export default withStyles({
    divs: {
        marginLeft: '25%',
        width: '50%',
        marginTop: '8%'
    },
    text: {
      textAlign:"center",
    },
    cardText: {
        width: '40ch'

    }
})
    (Weather);