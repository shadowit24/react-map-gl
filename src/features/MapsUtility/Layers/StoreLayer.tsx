import { Layer, Source } from "@vis.gl/react-maplibre";
import React, { memo } from "react";
import type { GeoJSONFeatureCollection } from "../../../store/containers/mapsStore";

type StoreType = {
  id: string;
  data: GeoJSONFeatureCollection | any;
};

const StoreLayer = (props: StoreType) => {

    console.log("re-render layer store")
  return (
    <Source id={`source-${props?.id}`} type="geojson" data={props?.data}>
      <Layer
        id={`layer-${props?.id}`}
        type="symbol"
        layout={{
          "icon-image": ["get", "brandimage"],
          "text-variable-anchor": ["top", "bottom", "left", "right"],
          "text-radial-offset": 0.5,
          "icon-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            9,
            0.05,
            10,
            0.15,
            11,
            0.25,
            12,
            0.3,
            14,
            0.4,
            16,
            0.5,
          ],
          "text-font": ["Open Sans Regular"],
          "icon-allow-overlap": true,
        }}
        paint={{
          "text-color": "blue",
        }}
      />
    </Source>
  );
};

export default memo(StoreLayer);
