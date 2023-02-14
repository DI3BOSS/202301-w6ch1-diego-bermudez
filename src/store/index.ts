import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ToDoReducer } from "./features/ToDoSlice";

export const store = configureStore({
  reducer: { toDo: ToDoReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
