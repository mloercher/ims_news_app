import React, {createContext, useEffect, useState}from 'react'
import axios from 'axios'


export const NewsContext = createContext()

export const NewsContextProvider = (props) => {

    const [data,setData] = useState()

    // fetching data from API and then saving response to 'data' variable
    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
            ).then(response => setData(response.data))
            .catch(error => console.log(error))
    },[])


    // wrapping all children in NewsContext.Provider--allowing us to grab above data and 'import' to any component that needs data
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}