export interface ITool {
  key: string;
  name: string;
  cost: number;
  damage: number;
  integrity: number;
  spritePosition: {
    x: number;
    y: number;
  };
}

export interface IShopState {
  tools: ITool[];
  wallet: number;
  currentIndex: number;
  spritePath: string;
  notEnoughMoney: boolean;
  loading: boolean;
  error: boolean;
}
