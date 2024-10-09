import axios from "axios";
import { useState } from "react"

const Weather = () => {
    const [data, setData] = useState(null);
    const [cityName, setCityName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = async () => {
        setLoading(true);
        setError(null); // Reset error state before making a new request
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: cityName,
                    units: 'metric',
                    appid: 'fef8f7ee67b313134e535abb5285f218'
                }
            });
            setData(response.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.response) {
                // Server responded with a status other than 200 range
                console.error('Error response:', err.response);
                setError(`Error: ${err.response.status} - ${err.response.statusText}`);
            } else if (err.request) {
                // Request was made but no response was received
                console.error('Error request:', err.request);
                setError('No response from server. Please try again later.');
            } else {
                // Something else happened while setting up the request
                console.error('Error message:', err.message);
                setError(`Error: ${err.message}`);
            }
        }
    }
    //https://i.pinimg.com/originals/6b/67/86/6b67864c75731b648e83f5f9bc740548.gif
    //https://clipart-library.com/3/360_F_401048954_owSVgEwxzpaY3du7NuA6tlsD0WljxQZc.jpg
    return (
        <>
            <div className="container mt-12">
                
                <img src="https://clipart-library.com/images_k/earth-transparent-clipart/earth-transparent-clipart-7.png"
                className="w-20 lg:w-24 rounded-full inline pb-8"/>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 inline"> Weather App</h1>
                <input type="text"
                    placeholder="Enter city name"
                    className="border-slate-400 border-2 py-1.5 px-4 lg:px-12 rounded-bl-md rounded-tl-md 
                    outline-none w-[65%] lg:w-[89%]"
                    onChange={(e) => { setCityName(e.target.value); }}
                />
                <button
                    className="bg-slate-400 py-2 rounded-br-md rounded-tr-md font-bold
                    text-white px-2 lg:px-4"
                    onClick={getWeather}>
                    Get Weather
                </button>

                {loading && <h1>Loading...</h1>}
                {<h2 className="error">{error}</h2>}
                {data ? (
                    <div className="mt-2 font-bold bg-sky-400 py-12 rounded-xl text-white">
                        <h2 className="text-2xl text-black font-normal pb-6">{data.name},{data.sys.country}</h2>
                        <div className="flex items-center justify-center text-center">
                            <img 
                                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                                alt={data.weather[0].description} 
                                className="w-[120px]"
                            />
                            <h3 className="text-6xl font-bold mb-4 ">{data.main.temp.toFixed()}°</h3>
                        </div>    
                        <span>{data.main.temp_max}° / </span>
                        <span>{data.main.temp_min}° </span>
                        <span>Feels Like {data.main.feels_like}°</span>
                        <h3>Humidity: {data.main.humidity}%</h3>
                        <h3>Pressure: {data.main.pressure} hPa</h3>
                    </div>
                ) : (!loading && !error && <h2 className="mt-2">Enter a city</h2>)}
            </div>
        </>
    )
}

export default Weather;



export default Weather;

