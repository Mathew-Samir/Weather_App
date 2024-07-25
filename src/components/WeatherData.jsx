import PropTypes from 'prop-types';
const WeatherData = ({ data }) => {
return (
    <>
        {data.weather ?(
            <div className="w-[100%] lg:w-[70%] bg-gray-300 shadow-lg rounded-lg m-auto relative px-6 top[10%]">
                <div className="flex justify-between w-full">
                    <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
                        <div className="flex flex-col items-center h-[80%]">
                            <p className='text-xl'>
                                {data.name},
                                {data.sys.country}
                            </p>
                            <p className='text-sm'>
                                {data.weather[0].description}
                            </p>
                            <h1 className='text-6xl font-semibold mt-16'>
                                {data.main.temp.toFixed()}°C
                            </h1>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col justify-between items-end">
                        <div className="relative">
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            className='w-[120px]' alt='icon' />
                        </div>
                        {data.name !== undefined ? (
                            <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                                <div className="flex justify-between gap-x-2">
                                    <p>Feels Like</p>
                                    <p className='font-bold'>{data.main.feels_like.toFixed()}°C</p>
                                </div>
                                <div className="flex justify-between gap-x-2">
                                    <p>Humidity</p>
                                    <p className='font-bold'>{data.main.humidity}%</p>
                                </div>
                                <div className="flex justify-between gap-x-2">
                                    <p>wind</p>
                                    <p className='font-bold'>{data.wind.speed.toFixed()} KPH</p>
                                </div>
                                <div className="flex justify-between gap-x-2">
                                    <p>Pressure</p>
                                    <p className='font-bold'>{data.main.pressure} hPa</p>
                                </div>
                            </div>
                        ):null}
                    </div>
                </div>
            </div>
    ):null}
    </>
)
}
WeatherData.propTypes = {
    data: PropTypes.any, 
};
export default WeatherData
