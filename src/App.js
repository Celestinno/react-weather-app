import Title from "./components/Title";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import axios from 'axios'
const title = 'Weather App'
const placeholder = 'Insert City Name...'
const days = 3;


function App() {
  const [textInput, setTextInput] = useState('')
  const [searchText, setSearchText] = useState('')
  const [temperature, setTemperature] = useState([])
  const [date, setDate] = useState([])
  const [rain, setRain] = useState([])
  const [icon, setIcon] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: { q: searchText, days: days },
      headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '853243696amsha8a2c9da46b622ep1de6dcjsnd8eb86fe7ffd'
      }
    };
    axios.request(options).then(function (response) {
      const tempIcon = [];
      const tempRain = [];
      const tempDate = [];
      const tempTemperature = [];
      response.data.forecast.forecastday.map(arr => {
        tempIcon.push(arr.day.condition.icon)
        tempRain.push(arr.day.condition.text)
        tempTemperature.push(arr.day.avgtemp_c)
        tempDate.push(arr.date)
        setRain(tempRain)
        setDate(tempDate)
        setTemperature(tempTemperature)
        setIcon(tempIcon)
      })
    })
      .catch(function (error) {
        if (searchText != '') {
          alert('Invalid parameter, type in the name of a city')
        }

      });
  }, [searchText, setSearchText])


  return (
    <div className="App">
      <Title title={title} />
      <Body days={days} rain={rain} temperature={temperature} date={date} icon={icon} placeholder={placeholder} setTextInput={setTextInput} setSearchText={setSearchText} textInput={textInput} />
    </div>
  );
}
export default App;
