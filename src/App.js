import React from "react";

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

// Short-way to import components -but for this to work we need a index.js file inside our components folder
import { Cards, Chart, CountryPicker} from "./components";

// because we are using module keyword
import styles from './App.module.css';

import {fetchData} from './api';
import logo from './images/image.png';

class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
    
        this.setState({data: fetchedData})
        // console.log(fetchedData);
    }

    handleCountryChange = async (country) => {
        // fetch the data
        const fetchedCountryData = await fetchData(country);
        console.log(country);
        console.log(fetchedCountryData);

        // set the state
        this.setState({data: fetchedCountryData, country: country})
    }

    render(){
        // destructuring state
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img src={logo} alt='covid-19'/>
                {/* <h1>App</h1> */}
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;