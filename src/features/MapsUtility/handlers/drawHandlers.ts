import type { MapHandlerType } from "../types"

interface DrawResponseType {
    event: any
    draws: any
}

export const drawHandlers = {
    onCreate: (event: any, draws: any) => {
        console.log("Create", event, draws)
    },
    onUpdate: (event: any, draws: any) => {
        console.log("Update", event, draws)
    },
    onSelection: (event: any, draws: any) => {
        console.log("Select", event, draws)
    },
    onDeleted: (event: any, draws: any) => {
        console.log("Deleted", event, draws)
    },
    onReset: (event: any, draws: any) => {
        console.log("Reset", event, draws)
    }
}