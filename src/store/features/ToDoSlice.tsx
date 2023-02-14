import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoListStructure } from "../../types";
import ToDos from "../Data/ToDos";

export const ToDoSlice = createSlice({
  name: "toDo", // prefijo del type de la action/
  initialState: ToDos,
  reducers: {
    loadToDo: (
      currentToDo: ToDoListStructure,
      action: PayloadAction<ToDoListStructure>
    ) => [...action.payload],
  },
});

export const ToDoReducer = ToDoSlice.reducer;
export const { loadToDo: loadToDoActionCreator } = ToDoSlice.actions;
