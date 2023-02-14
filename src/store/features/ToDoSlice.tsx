import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoListStructure } from "../../types";
import ToDos from "../Data/ToDos";

export const ToDoSlice = createSlice({
  name: "toDo",
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
