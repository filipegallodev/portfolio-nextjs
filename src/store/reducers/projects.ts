import { Action, Dispatch, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchProjects =
  () => async (dispatch: Dispatch<Action<string>>) => {
    try {
      dispatch(fetchStarted());
      const response = await fetch("/projects.json");
      const data = await response.json();
      if (!data) throw new Error("Falha ao buscar projetos.");
      dispatch(fetchSuccess(data));
    } catch (err) {
      if (err instanceof Error) dispatch(fetchError(err.message));
    }
  };

export default slice.reducer;
