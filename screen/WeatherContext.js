import React, { createContext, useState } from "react"

export const WeatherContext=createContext();
export const WeatherProvider=({children})=>{
    const [weather,setWeather]=useState({
        temperature:null,
        description:'',
        code:null,
        today:"",
        max:null,
        city:'',
        sunrise:'',
        sunset:'',
        lat:'',
        long:'',
        uvindex:null
      })
    return(
        <WeatherContext.Provider value={{weather,setWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}