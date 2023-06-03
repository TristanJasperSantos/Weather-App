import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoApiOptions, url } from "../api";

const Search = ({onSearchChange})=>{
    const [search, setSearch] = useState(null);
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputValue) =>{
        return fetch(`${url}/cities?namePrefix=${inputValue}`, GeoApiOptions)
        .then(res => res.json())
        .then(res => { 
            return{
                options: res.data.map((city)=>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label:`${city.name} ${city.countryCode}`,
                    }
                })

            }
            
        })
        .catch(error => console.log(error))
    }
    return(
        <div>
            <AsyncPaginate
            placeholder = "search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            className=" mt-4 w-96"
            loadOptions={loadOptions}
            />
        </div>
    )


};

export default Search;