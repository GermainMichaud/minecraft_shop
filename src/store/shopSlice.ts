import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IShopState } from '../interfaces';
import { RootState } from '.';

export const fetchTools = createAsyncThunk('shop/fetchTools', async () => {
  const response = await fetch(
    'https://f174ffba-be80-4ed2-964d-066308cf40cd.mock.pstmn.io/api/tools',
  );
  const data = await response.json();
  return data;
});

export const initialState: IShopState = {
  tools: [],
  wallet: 1500,
  currentIndex: 0,
  spritePath: 'src/assets/img/sprite_tools.png',
  notEnoughMoney: false,
  loading: true,
  error: false,
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
      // If not enough money
      if (state.wallet < currentTool.cost) {
        state.notEnoughMoney = true;
        return;
      }
      // If more than 10 tools in the shop, add 50% discount
      const discount = state.tools.length > 10 ? 0.5 : 1;
      // Remove money from wallet
      state.wallet -= currentTool.cost * discount;
      // Remove tool from shop
      state.tools.splice(state.currentIndex, 1);
      // Update currentIndex (to prevent crashing when last index)
      state.currentIndex = Math.min(state.currentIndex, state.tools.length - 1);
    },
    resetNotEnoughMoney: (state) => {
      state.notEnoughMoney = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTools.fulfilled, (state, action) => {
      state.loading = false;
      state.tools = action.payload;
    });
    builder.addCase(fetchTools.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTools.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Export all actions
export const { previousTool, nextTool, buyTool, resetNotEnoughMoney } = shopSlice.actions;

// Export selectors
export const selectTools = (state: RootState) => state.shop.tools;
export const selectCurrentIndex = (state: RootState) => state.shop.currentIndex;
export const selectWallet = (state: RootState) => state.shop.wallet;
export const selectSpritePath = (state: RootState) => state.shop.spritePath;
export const selectCurrentTool = (state: RootState) =>
  state.shop.tools[state.shop.currentIndex];
export const selectNotEnoughMoney = (state: RootState) => state.shop.notEnoughMoney;
export const selectLoading = (state: RootState) => state.shop.loading;
export const selectError = (state: RootState) => state.shop.error;

export default shopSlice.reducer;
