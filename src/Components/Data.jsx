import React from 'react'
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Data() {

  const {cca2} = useParams(null);
  const [single,setSingle] = useState(null);
  const [border,setBorder] = useState([]);

  async function fetchSingle(){
    let bal = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`);
    let data = await bal.json();
    let vis = data[0];
    setSingle(vis);
    setBorder(vis.borders || []);
  }
  useEffect(()=>{
    fetchSingle();
  },[cca2])

  return (
    <>
      <div style={{ border:'2px solid red'}}>
      {single ? (<div>
        <img src={single.flags.png}/>
        <h1>{single.name.common}</h1>
        <h1>{single.population}</h1>
        <h1>{single.timezones}</h1>
       
        <div 
        style={{
          display:'flex',
          flexDirection:'column'
        }}
        >
          {
              border.length>0 ? (
                border.map((gh)=>{
                  return(
                    <Link  to={`/about/${gh}`} style={{textDecoration:'none'}} key={gh}>
                    <h1 
                    style={{paddingLeft:'20px'}}
                     >{gh}</h1>
                    </Link>
                  )})
              ):<h1>No Neabering countries</h1>
          }
        </div>
       
        
        
      </div>):(
        <div style={{padding:'100px'}}>
          Loading........
        </div>
      )
      }
      </div>
    </>
  )
}

