import Map, { AttributionControl, GeolocateControl, MapProvider, NavigationControl, ScaleControl } from "@vis.gl/react-maplibre";
import maplibregl, { type MapLayerMouseEvent } from "maplibre-gl";
import React, { useCallback, useRef } from 'react';
import DrawControl from "../../components/DrawControl";
import { useMapsStore } from "../../store";
import { drawHandlers } from "./handlers/drawHandlers";
import { mapHandlers } from "./handlers/mapHandlers";

type Props = {}

const MapsUtility:React.FC = (props: Props) => {
  const { layer, setLayer } = useMapsStore()
  const mapRef = useRef<any>(null)
  
  const  onLoad = useCallback(()=> {
    if(!mapRef) return;

    let mapCtn = mapRef?.current?.getMap()

    mapHandlers.onLoad({
      ref: mapRef,
    })

    //

    
  },[layer?.style, ])

  const  onClick = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;
    const { lngLat, point } = event;
    const features = mapRef?.current?.queryRenderedFeatures(point);

    // mapHandlers.onClick({
    //   ref: mapRef,
    //   current: [],
    //   features: features
    // })

    
  },[mapRef])

  
  const  onMouseMove = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;

    // mapHandlers.onMouseMove({
    //   ref: mapRef,
    //   current: [],
    //   features: []
    // })
    
  },[mapRef])

  const  onMouseLeave = useCallback((event: MapLayerMouseEvent)=> {
    if(!mapRef) return;

  //  mapHandlers.onMouseLeave({
  //     ref: mapRef,
  //     current: [],
  //     features: []
  //   })
    
  },[mapRef])


  const onMove = useCallback((e: any)=> {
    
  },[])

  const onMouseUp = useCallback((e: any)=> {
   console.log("onMouseUp")
  },[])



  const onMouseDown = useCallback((e: any)=> {

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