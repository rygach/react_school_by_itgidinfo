import { createSlice } from "@reduxjs/toolkit";
import goodsArr from '../data/goods.json';

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: goodsArr
    },
    reducers: {
        decrementGoods: (state, data) => {
            let articul = data.payload;

            console.log(state.goods);
        }
    }
});

export const { decrementGoods } = goodsSlice.actions;
export const selectGoods = (state) => state.goods.goods;
export default goodsSlice.reducer;