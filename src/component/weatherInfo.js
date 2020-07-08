import React, { useState } from 'react';
import { FormGroup, Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import Axios from 'axios';
import CountryDeatil from './countryDetail';

function WeatherInfo() {
    const [userInput, setUserInput] = useState('');
    const [weatherData, setWeatherData] = useState([])

    const onChnageUser = (e) => {
        
        setUserInput(e.target.value)
    }
    const onSumbitData = () => {
        Axios.get('https://restcountries.eu/rest/v2/name/' + userInput).then(res => {
            setWeatherData(res.data)
        })
    }


// console.log(weatherData, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5")
    return (

        <div className="container">
            <Form className='mt-5 mb-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    onSumbitData()
                }}>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="search country ..."
                            onChange={onChnageUser}
                            value={userInput} />

                        <InputGroupAddon addonType='append'>
                            <Button disabled={!userInput} type='submit'>search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        {/* <CountryDeatil Data={weatherData}/> */}
                {userInput ? ( <CountryDeatil Data={weatherData}/> ) :<p></p>}
        </div>

    )
}

export default WeatherInfo;