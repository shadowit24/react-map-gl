import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { useMemo, useRef } from "react";

import { useControl } from "@vis.gl/react-maplibre";
import { BsSlashLg } from "react-icons/bs";
// import { FaRegCircle } from "react-icons/fa6";
import { GrClear } from "react-icons/gr";
import { IoTrashOutline } from "react-icons/io5";
import { TbPolygon } from "react-icons/tb";

// import {
//     CircleMode,
//     DirectMode,
//     DragCircleMode,
//     SimpleSelectMode,
// } from "maplibre-gl-draw-circle";
import DrawTools from "./components/DrawTool";

const DrawControl = (props: any) => {
  // const [drawRef, setDrawRef] = useState<any>(null);
  let drawRef = useRef<any>(null);

  useControl(
    ({ map }) => {
      const draw = new MapboxDraw({ 
        userProperties: false,
        displayControlsDefault: true,
        controls: {
          point: false,
          line_string: false,
          polygon: false,
          trash: false,
          combine_features: false,
          uncombine_features: false,
        },
        
        modes: {
          ...MapboxDraw.modes,
          // draw_circle: CircleMode,
          // drag_circle: DragCircleMode,
          // direct_select: DirectMode,
          // simple_select: SimpleSelectMode,
        },
        styles: [
          {
            id: "gl-draw-line",
            type: "line",
            filter: [
              "all",
              ["==", "$type", "LineString"],
              ["!=", "mode", "static"],
            ],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "#0607fc",
              "line-dasharray": [0.2, 2],
              "line-width": 3,
            },
          },
          // polygon fill
          {
            id: "gl-draw-polygon-fill",
            type: "fill",
            filter: [
              "all",
              ["==", "$type", "Polygon"],
              ["!=", "mode", "static"],
            ],
            paint: {
              "fill-color": "#0607fc",
              "fill-outline-color": "#0607fc",
              "fill-opacity": 0.1,
            },
          },
          // polygon mid points
          {
            id: "gl-draw-polygon-midpoint",
            type: "circle",
            filter: [
              "all",
              ["==", "$type", "Point"],
              ["==", "meta", "midpoint"],
            ],
            paint: {
              "circle-radius": 5,
              "circle-color": "#fbb03b",
            },
          },
          // polygon outline stroke
          // This doesn't style the first edge of the polygon, which uses the line stroke styling instead
          {
            id: "gl-draw-polygon-stroke-active",
            type: "line",
            filter: [
              "all",
              ["==", "$type", "Polygon"],
              ["!=", "mode", "static"],
            ],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "#0607fc",
              "line-dasharray": [0.2, 2],
              "line-width": 3,
            },
          },
          // vertex point halos
          {
            id: "gl-draw-polygon-and-line-vertex-halo-active",
            type: "circle",
            filter: [
              "all",
              ["==", "meta", "vertex"],
              ["==", "$type", "Point"],
              ["!=", "mode", "static"],
            ],
            paint: {
              "circle-radius": 6,
              "circle-color": "#FFF",
            },
          },
          // vertex points
          {
            id: "gl-draw-polygon-and-line-vertex-active",
            type: "circle",
            filter: [
              "all",
              ["==", "meta", "vertex"],
              ["==", "$type", "Point"],
              ["!=", "mode", "static"],
            ],
            paint: {
              "circle-radius": 6,
              "circle-color": "#0607fc",
            },
          },

          // INACTIVE (static, already drawn)
          // line stroke
          {
            id: "gl-draw-line-static",
            type: "line",
            filter: [
              "all",
              ["==", "$type", "LineString"],
              ["==", "mode", "static"],
            ],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "#000",
              "line-width": 3,
            },
          },
          // polygon fill
          {
            id: "gl-draw-polygon-fill-static",
            type: "fill",
            filter: [
              "all",
              ["==", "$type", "Polygon"],
              ["==", "mode", "static"],
            ],
            paint: {
              "fill-color": "#000",
              "fill-outline-color": "#000",
              "fill-opacity": 0.1,
            },
          },
          // polygon outline
          {
            id: "gl-draw-polygon-stroke-static",
            type: "line",
            filter: [
              "all",
              ["==", "$type", "Polygon"],
              ["==", "mode", "static"],
            ],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "#000",
              "line-width": 2,
            },
          },
        ],
      });

      // handlers draw
      map.on("draw.create", (event) => {
        props?.onCreate(event, draw?.getAll());
      });

      map.on("draw.update", (event) => {
        props?.onUpdate(event, draw?.getAll());
      });
      map.on("draw.delete", (event) => {
        props?.onDelete(event, draw?.getAll());
      });
      map.on("draw.deleteAll", (event) => {
        props?.onDeleteAll(event, draw?.getAll());
      });
      map.on("draw.selectionchange", (event) => {
        props?.onSelection(event, draw?.getAll());
      });

      if (drawRef) drawRef.current = draw;

      return draw as any;
    },

    ({ map }) => {
      map.off("draw.create", props?.onCreate);
      map.off("draw.update", props?.onUpdate);
      map.off("draw.delete", props?.onDelete);

      map.off("draw.selectionchange", props?.onSelection);
    }
  );

  const tools = [
    // {
    //   title: "Circle",
    //   icon: <FaRegCircle size={20} />,
    //   onClick: () => {
    //     drawRef.current?.changeMode("draw_circle", {
    //       initialRadiusInKm: 1,
    //     });
    //   },
    // },
    {
      title: "Polygon",
      icon: <TbPolygon size={20} />,
      onClick: () => {
        drawRef.current?.changeMode("draw_polygon");
      },
    },
    {
      title: "Line",
      icon: <BsSlashLg size={20} />,
      onClick: () => {
        drawRef.current?.changeMode("draw_line_string");
      },
    },
    {
      title: "Deleted",
      icon: <IoTrashOutline size={20} />,
      onClick: () => {
        drawRef.current?.trash();
      },
    },
    {
      title: "Reset",
      icon: <GrClear size={20} />,
      onClick: () => {
        drawRef.current?.deleteAll();
        props?.onDeleteAll();
      },
    },
  ];

  return useMemo(() => {
    return (
      <DrawTools
        direction="row"
        animate={true}
        children={tools}
        position={
          props?.position ?? {
            bottom: 185,
            right: 4,
          }
        }
      />
    );
  }, [drawRef]);
};

export default DrawControl;
