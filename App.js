import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "2346fd7d513b885368a65494701b0e5d";

export default class extends React.Component{
  state = {
    isLoading: true,
  };

  getWeather = async(lat, lon) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp});
  }

  getLocation = async() => {
    try{
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync();
      //console.log(response);
      //console.log(latitude,longitude);
      this.getWeather(latitude,longitude);
      this.setState({isLoading: false});
    }catch(error){
      Alert.alert("can't find you", "so sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const {isLoading, temp} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>
    );
  }
  
}

