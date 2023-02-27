import { GoogleMap,useLoadScript, Marker } from "@react-google-maps/api";
import {apiKey} from "../confidential/api_key";
import { useMemo } from "react";

import React from 'react'


export default function GoogleMaps()
{

  const {isLoaded} = useLoadScript(apiKey)


  if(!isLoaded) return <div className="mapParent"><div className='map'>Loading...</div></div>
    
         return(
            <div className="map_parent"><div className='map' onChange={(e)=>e.preventDefault()}><Map /></div></div>
         )


}
function Map()
{
   const center= useMemo(()=>({lat:53.96378750944353, lng: 18.535494717730284}),[])
   
    return(<GoogleMap zoom={13} center={center}  mapContainerClassName='map'>
       <Marker position={center} icon={'/images/icons/marker.png'}></Marker>
        </GoogleMap>)
}

