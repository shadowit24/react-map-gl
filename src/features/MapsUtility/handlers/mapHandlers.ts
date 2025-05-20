import type { MapHandlerType } from "../types"

export const mapHandlers = {
    onLoad: ({ref, current, features}: MapHandlerType) => {
        console.log("Load", ref, current, features)
    },
    onMouseMove: ({ref, current, features}: MapHandlerType) => {
        console.log("Move", ref, current, features)
    },
    onMouseLeave: ({ref, current, features}: MapHandlerType) => {
        console.log("Leave", ref, current, features)
    },
    onClick: ({ref, current, features}: MapHandlerType) => {
        console.log("Click", ref, current, features)
    }
}