const CurrentWeather = ({data}) => {
    return(
        <div className=" w-80 shadow-xl rounded-md text-white bg-zinc-700 p-4">
            <div className=" flex justify-between items-center">
                <div> 
                    <h1 className=" -tracking-tighter font-semibold leading-none text-lg">{data.city}</h1>
                    <p className=" font-normal leading-none text-sm">{data.weather[0].description}</p>
                </div>
                <img className=" w-24" src={`./icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>
            <div className=" flex justify-between items-center ">
                <p className=" text-6xl -tracking-wide w-auto font-semibold">{Math.round(data.main.temp)}°C</p>
                <div className=" w-full ml-6">
                    <div>
                        <span className=" font-normal text-right text-xs"> Details</span>
                    </div>
                    <div className=" flex justify-between">
                        <span className=" font-normal text-start text-xs">feels like</span>
                        <span className=" font-semibold text-end text-xs">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className=" flex justify-between">
                        <span className=" font-normal text-start text-xs">Wind</span>
                        <span className=" font-semibold text-end text-xs">{data.wind.speed}/s</span>
                    </div>
                    <div className=" flex justify-between">
                        <span className=" font-normal text-start text-xs">Humidity</span>
                        <span className=" font-semibold text-end text-xs">{data.main.humidity}%</span>
                    </div>
                    <div className=" flex justify-between">
                        <span className=" font-normal text-start text-xs">Pressure</span>
                        <span className=" font-semibold text-end text-xs">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CurrentWeather;