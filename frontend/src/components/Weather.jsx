import { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { CloudDrizzleIcon, Rainbow, Search, SearchIcon } from 'lucide-react';

// import searchIcon from "./assets/weather/search.png";
// import drizzleIcon from "./assets/weather/drizzle.png";
// import humidityIcon from "./assets/weather/humidity.png";

const WeatherDetails = ({icon,temp,city,country,lat,log,humidity}) =>{
  return(
    <div className='bg-neutral-100 h-[350px] w-full rounded-md flex flex-col justify-around items-center text-center'>
    {/* <div className="">
      <img src={icon} alt="Image" />
    </div> */}
    <div className="font-bold">{temp}deg C</div>
    <div className="font-bold text-5xl">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
    <div className='flex gap-10'>
    <div className='flex flex-col'>
        <span>{lat}</span>
        <span className=" font-bold">latitude</span>
      </div>
      <div className='flex flex-col'>
        <span>{log}</span>
        <span className="font-bold">longitude</span>
      </div>
    </div>
    </div>
    <div className="data-container">
      <div className="element">
        {/* <img src={Rainbow} alt="humidity" className="icon" /> */}
        <div className="data">
          <div className="humidity-percent">{humidity}%</div>
          <div className="font-bold">Humidity</div>
        </div>
      </div>
    </div>
    </div>
  );
};

WeatherDetails.propTypes={
  temp:PropTypes.number.isRequired,
  temp:PropTypes.number.isRequired,
  city:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
  lat:PropTypes.number.isRequired,
  log:PropTypes.number.isRequired,
};
function App() {

  let api_key = "c0b8dcf0fff50619831e412fd7c638bb";
  const [text,setText] =useState("Salem");

  const [icon,setIcon]=useState(CloudDrizzleIcon);
  const [temp,setTemp]=useState(0);
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [lat,setLat]=useState(0);
  const [log,setLog]=useState(0);
  const [humidity,setHumidity]=useState(0);

  const [cityNotFound , setCityNotFound]=useState(false);
  const [loading, setLoading]=useState(false);
  const [error,setError]= useState(null);

  const search=async ()=>{
    setLoading(true);
    setCityNotFound(false);
  setError(null);
    
    let url=` https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key} `;


    try {
        const res = await fetch(url);
        const data = await res.json();
    
        if (data.cod === "404") {
          console.error("City not found");
          setCityNotFound(true);
          setLoading(false);
          return;
        }
    
        // Ensure all required data is present before setting the state
        if (data.main && data.sys && data.coord) {
          setHumidity(data.main.humidity);
          setTemp(Math.floor(data.main.temp - 273.15)); // Assuming temp is in Kelvin, converting to Celsius
          setCity(data.name);
          setCountry(data.sys.country);
          setLat(data.coord.lat);
          setLog(data.coord.lon);
        } else {
          console.error("Unexpected data structure:", data);
          setError("Unexpected data structure received.");
        }
    // try{
    //   let res= await fetch(url);
    //   let data=await res.json();
    //   //console.log(data);
    //   if(data.cod==="404"){
    //     console.error("City not found");
    //     setCityNotFound(true);
    //     setLoading(false);
    //     return;
    //   }
    //   setHumidity(data.main.humidity);
    //   setTemp(Math.floor(data.main.temp));
    //   setCity(data.name);
    //   setCountry(data.sys.country);
    //   setLat(data.coord.lat);
    //   setLog(data.coord.lon);

    }catch(error){
      console.error("An error occured: ", error.message);
      setError("An error occurred while fetching weather data.");

    }finally{
      setLoading(false);

    }
  };

  const handleCity=(e) => {
    setText(e.target.value);
  };

  const handleKeyDown=(e)=>{
    if(e.key==="Enter"){
      search();
    }
  };

  useEffect(function (){
    search();
  }, []);

  return (
    <>
      <div className="container">
        <div className="input-container">

        <div className="flex mb-2 gap-2.5">
      <div className="relative flex-grow">
        <input
          type="text"
          className="w-full p-4 pl-112 bg-neutral-10 h-[10px] border rounded placeholder-black text-black" 
          placeholder="Search city"
          onChange={handleCity}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black" />
      </div>
      </div>

      
        

          {!loading && !cityNotFound && <WeatherDetails icon={icon} temp=
          {temp} city={city} country={country} lat={lat} log={log} humidity={humidity} />}

          {loading && <div className="loading-message">Loading...</div>}
          {error && <div className="error-message">{error}</div>}
          {cityNotFound && <div className="city-not-found">City not found</div>
          }
        </div>
      </div>
      
    </>
  )
}

export default App