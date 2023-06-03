import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({data})=>{
    const daysInWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday","Sunday"];
    const currentDay = new Date().getDay();
    const nextSevenDays = daysInWeek.slice(currentDay, daysInWeek.length).concat(daysInWeek.slice(0,currentDay))
    console.log(nextSevenDays);
    return(
        <div className=' w-4/5'>
            <label className=' mb-4 font-semibold text-xl'>Daily Forecast</label>
            <Accordion allowZeroExpanded className=' w-full m-auto rounded-xl text-white'>
                {data.list.slice(0,7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton className=' flex justify-between bg-zinc-700 rounded-xl mb-2'>
                                <div className=' w-full flex justify-between items-center' >
                                    <div className=' flex items-center'>
                                        <img className=' w-12 m-1' src={`./icons/${item.weather[0].icon}.png`} alt="" />
                                        <p className=' font-medium'>{nextSevenDays[index]}</p>
                                    </div>
                                    <div className=' flex'>
                                        <p className=' font-medium mr-4'>{item.weather[0].description}</p>
                                        <p className=' font-medium mr-4'>{`${item.main.temp_min}/${item.main.temp_max}`}</p>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className=' bg-white text-neutral-900 rounded-xl p-4 mb-2'>
                        <div className=" grid grid-cols-2 gap-2">
                            <div className=" flex justify-between">
                            <label>Pressure:</label>
                            <label className=' mr-2'>{item.main.pressure}hPa</label>
                            </div>
                            <div className=" flex justify-between">
                            <label>Humidity:</label>
                            <label className=' mr-2'>{item.main.humidity}%</label>
                            </div>
                            <div className=" flex justify-between">
                            <label>Clouds:</label>
                            <label className=' mr-2'>{item.clouds.all}%</label>
                            </div>
                            <div className=" flex justify-between">
                            <label>Wind speed:</label>
                            <label className=' mr-2'>{item.wind.speed} m/s</label>
                            </div>
                            <div className=" flex justify-between">
                            <label>Sea level:</label>
                            <label className=' mr-2'>{item.main.sea_level}m</label>
                            </div>
                            <div className=" flex justify-between">
                            <label>Feels like:</label>
                            <label className=' mr-2'>{item.main.feels_like}°C</label>
                            </div>
                        </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>

    );
};

export default Forecast;