import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: {}
    },

    reducers: {
        addCard(state, action) {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id,
                front,
                back
            }
        }
    }

});

//Create the selector to select all the cards in state

export const selectCards = (state, id) => state.card.cards[id];

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;