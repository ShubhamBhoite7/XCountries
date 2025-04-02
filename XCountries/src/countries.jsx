import { useEffect, useState } from "react";


const Card=({name,flag})=>{
    return(
    <div
     style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      gap:"4px",
      height:"200px",
      width:"200px",
      border:"0.5px solid black",
         borderRadius:"5px",
         padding:"10px",
         textAlign:"center"


     }}
    >
    <img src={flag} alt={`Flag of ${name}`} style={{
        height:"100px",
        width:"100px"
    }} />
    <h2>{name}</h2>

    </div>
    );
};


 const API_ENDPOINT="https://xcountries-backend.azurewebsites.net/all"

export default function Countries(){

    // const temp = [1,2,3,4,5,6];
    const[countries,setCountries]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(API_ENDPOINT);
                const jSonRes = await resp.json();
                setCountries(jSonRes);
            } catch (error) {
                console.error("Error fetching data: " + error.message);
            }
        };
        fetchData();
    }, []);
    return (
    <div style={{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    justifyContent:"center"
      


    }}>
     {
        countries.map(({name,flag,abbr})=>(
            <Card name={name} flag={flag} key={abbr}/>
        ))
     }

    </div>
    )
}