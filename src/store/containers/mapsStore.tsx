import type { GeoJSONFeature } from "maplibre-gl";
import { create } from "zustand";
import mapStyle from "../../assets/style.json";

export interface GeoJSONFeatureCollection {
    features: GeoJSONFeature[],
    type: String
}

interface LayerType {
    style?: any;
    initialViewState: {
      longitude: number;
      latitude: number;
      zoom: number | undefined;
      minZoom?: number | undefined;
      hash?: Boolean | undefined;
    };
  }

interface MapsState {
  layer: LayerType;
  setLayer?: (data: LayerType) => void;
}

const useMapsStore = create<MapsState>((set) => ({
  layer: {
    style: mapStyle,
    initialViewState: {
      longitude: 106.7619,
      latitude: 10.8926,
      zoom: 10,
      minZoom: 5,
      hash: true,
    },
  },
  isLoggedIn: false,
  setLayer: (payload) => set((state) => ({ ...state, layer: payload })),
 
}));

export default useMapsStore;
