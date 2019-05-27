import { Edit_Task } from "./types";

export function Edit_Task_Function(activeTaskModel) {
    return {
        type: Edit_Task,
        payload: activeTaskModel
    }
}