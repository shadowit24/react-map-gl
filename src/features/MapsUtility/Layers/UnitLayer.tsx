import { Layer, Source } from "@vis.gl/react-maplibre";
import React, { memo } from "react";
import type { GeoJSONFeatureCollection } from "../../../store/containers/mapsStore";

type UnitType = {
  id: string;
  data: GeoJSONFeatureCollection | any;
};

const UnitLayer = (props: UnitType) => {

    console.log("re-render layer store")
  return (
    <Source id={`source-${props?.id}`} type="geojson" data={props?.data}>
      <Layer
        id={`layer-fill-${props?.id}`}
        type="fill"
        paint={{
          "fill-color": "#FFBB5C",
          "fill-antialias": true,
          
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.65,
            0.1,
          ],
        }}
        
      />
      <Layer
        id={`layer-line-${props?.id}`}
        type="line"
        paint={{
          "line-color": "#C63D2F",
          "line-width": 2,
          "line-dasharray": [2, 2],
        }}
      />

    </Source>
  );
};

export default memo(UnitLayer);
