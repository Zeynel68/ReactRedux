import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 5
}

const counterSlice = createSlice({
    name: 'counter',
    initialState, // Burada başlangıç durumu belirtilmeli
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;