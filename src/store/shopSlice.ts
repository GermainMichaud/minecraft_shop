import { createSlice } from '@reduxjs/toolkit';

import { IShopState } from '../interfaces';
import { RootState } from '.';
import defaultToolsData from './data/tools';

export const initialState: IShopState = {
  tools: [...defaultToolsData],
  wallet: 1500,
  currentIndex: 0,
  spritePath: 'src/assets/img/sprite_tools.png',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    previousTool: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    nextTool: (state) => {
      if (state.currentIndex < state.tools.length - 1) {
        state.currentIndex += 1;
      }
    },
    buyTool: (state) => {
      // If no more tools in the shop, do nothing
      if (!state.tools.length) return;
      // Get current tool
      const currentTool = state.tools[state.currentIndex];
      // If not enough money, do nothing
      if (state.wallet < currentTool.cost) return;
      // If more than 10 tools in the shop, add 50% discount
      const discount = state.tools.length > 10 ? 0.5 : 1;
      // Remove money from wallet
      state.wallet -= currentTool.cost * discount;
      // Remove tool from shop
      state.tools.splice(state.currentIndex, 1);
      // Update currentIndex (to prevent crashing when last index)
      state.currentIndex = Math.min(state.currentIndex, state.tools.length - 1);
    },
  },
});

// Export all actions
export const { previousTool, nextTool, buyTool } = shopSlice.actions;

// Export selectors
export const selectTools = (state: RootState) => state.shop.tools;
export const selectCurrentIndex = (state: RootState) => state.shop.currentIndex;
export const selectWallet = (state: RootState) => state.shop.wallet;
export const selectSpritePath = (state: RootState) => state.shop.spritePath;
export const selectCurrentTool = (state: RootState) =>
  state.shop.tools[state.shop.currentIndex];

export default shopSlice.reducer;
