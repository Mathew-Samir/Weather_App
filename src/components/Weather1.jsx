import axios from 'axios';
import { useState } from 'react';
import WeatherData from './WeatherData';

const Weather1 = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const API_Key = 'fef8f7ee67b313134e535abb5285f218';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_Key}`

    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios.get(url)
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
            setLocation("")
        }
    }
    return (
        <>
            <div className="w-full h-full relative">
                <div className="mt-12">
                    <img src="https://clipart-library.com/images_k/earth-transparent-clipart/earth-transparent-clipart-7.png"
                    className="w-20 lg:w-24 rounded-full inline pb-8"/>
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 inline"> Weather App</h1>
                </div>
                
                <div className="text-center p-4">
                    <input
                        type="text" placeholder="Enter Location"
                        className="p-3 px-6 w-[90%] lg:w-[70%] text-lg rounded-3xl
                        border border-gray-200 text-gray-600
                        placeholder:text-gray-400 outline-none 
                        bg-white-600/10 shadow-md mt-8"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyDownCapture={searchLocation}
                    />
                </div>
            </div>
            <WeatherData data={data} />
        </>
    )
}

export default Weather1
