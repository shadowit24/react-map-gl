import Map, { GeolocateControl, MapProvider, NavigationControl, ScaleControl } from "@vis.gl/react-maplibre";
import maplibregl, { type MapLayerMouseEvent } from "maplibre-gl";
import React, { useCallback, useRef } from 'react';
import DrawControl from "../../components/DrawControl";
import { useMapsStore } from "../../store";
import { drawHandlers } from "./handlers/drawHandlers";
import { mapHandlers } from "./handlers/mapHandlers";



const MapsUtility:React.FC = () => {
  const { layer } = useMapsStore()
  const mapRef = useRef<any>(null)
  
  const  onLoad = useCallback(()=> {
    if(!mapRef) return;

    

    mapHandlers.onLoad({
      ref: mapRef,
    })

    
    
  },[layer?.style, ])

  const  onClick = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;
     console.log(event)

    // mapHandlers.onClick({
    //   ref: mapRef,
    //   current: [],
    //   features: features
    // })

    
  },[mapRef])

  
  const  onMouseMove = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;

    console.log(event)

    // mapHandlers.onMouseMove({
    //   ref: mapRef,
    //   current: [],
    //   features: []
    // })
    
  },[mapRef])

  const  onMouseLeave = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;
  console.log(event)
  //  mapHandlers.onMouseLeave({
  //     ref: mapRef,
  //     current: [],
  //     features: []
  //   })
    
  },[mapRef])


  const onMove = useCallback(()=> {
    
  },[])

  const onMouseUp = useCallback((e: any)=> {
   console.log("onMouseUp", e)
  },[])



  const onMouseDown = useCallback(()=> {

    console.log("onMouseDown")
    
  },[])

  const onMouseEnter = useCallback(()=> {
    console.log("onMouseEnter")
  },[])
  const onMouseOut = useCallback(()=> {
    console.log("onMouseOut")
  },[])
  const onMouseOver = useCallback(()=> {
    console.log("onMouseOver")
  },[])


  const geolocateControlRef = useCallback((ref: any) => {
    console.log("object", ref)
    if (ref) {
      ref.trigger();
    }
  }, []);

  //event lấy vị trí hiện tại
  const onGeolocate = useCallback((event: any) => {
    console.log("object", event)
    const coords = event.coords;
    console.log(coords)
    // setLayer({
    //   ...layer,
    //   initialViewState: {
    //     longitude: coords?.longitude,
    //     latitude: coords?.latitude,
       
    //   },
    // })

  }, []);

  return (
    <MapProvider>
        <Map
          id="maps-utility"
          ref={mapRef}
          initialViewState={layer?.initialViewState}
          mapStyle={layer?.style}
          mapLib={maplibregl}
          onLoad={onLoad}
          onClick={onClick}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onMove={onMove}
          onMouseEnter={onMouseEnter}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          
        >
          <DrawControl onCreate={drawHandlers.onCreate}
          onUpdate={drawHandlers.onUpdate}
          onDelete={drawHandlers.onDeleted}
          onDeleteAll={drawHandlers.onReset}
          onSelection={drawHandlers.onSelection}
          />

          <NavigationControl
          position="bottom-right"
          showCompass
          visualizeRoll
          visualizePitch
        />
        <GeolocateControl
          position="bottom-right"
          ref={geolocateControlRef}
          onGeolocate={onGeolocate}
        />
        {/* <AttributionControl
          position="bottom-left"
          customAttribution={"Map data © OpenStreetMap contributors"}
          compact
        /> */}
        <ScaleControl position="bottom-left" unit="metric" />
          
        </Map>
      </MapProvider>
  )
}

export default MapsUtility