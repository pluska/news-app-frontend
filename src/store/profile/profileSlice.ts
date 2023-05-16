import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  preferredSources: string[];
  preferredAuthors: string[];
  preferredCategories: string[];
}

const initialState: ProfileState = {
  preferredSources: [],
  preferredAuthors: [],
  preferredCategories: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPreferredSources: (state, action: PayloadAction<string[]>) => {
      state.preferredSources = action.payload;
    },
    setPreferredAuthors: (state, action: PayloadAction<string[]>) => {
      state.preferredAuthors = action.payload;
    },
    setPreferredCategories: (state, action: PayloadAction<string[]>) => {
      state.preferredCategories = action.payload;
    },
  },
});

export const {
  setPreferredSources,
  setPreferredAuthors,
  setPreferredCategories,
} = profileSlice.actions;
export default profileSlice.reducer;
