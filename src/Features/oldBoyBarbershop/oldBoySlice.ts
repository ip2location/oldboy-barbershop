'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface OldBoyState {
  myInput: string;
}

const initialState = {
  value: {
    myInput: '',
  } as OldBoyState,
};

export const oldBoySlice = createSlice({
  name: 'oldBoyBarbershop',
  initialState,
  reducers: {
    clearValueFunction: () => {
      return initialState;
    },
    createFunction: (state, action: PayloadAction<string>) => {
      return {
        value: {
          myInput: action.payload,
        },
      };
    },
    displayFunction: (state, action: PayloadAction<string>) => {
      state.value.myInput = action.payload;
      return alert(state.value);
    },
  },
});

export const { createFunction, displayFunction, clearValueFunction } = oldBoySlice.actions;

export default oldBoySlice.reducer;
