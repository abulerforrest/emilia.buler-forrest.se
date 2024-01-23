import { create } from "zustand";

interface StoreState {
  isCurrent: boolean;
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export const portfolioStore = create<StoreState>((set) => ({
  isCurrent: false,
  showMenu: false,
  setIsCurrent: (isCurrent: boolean) => set({ isCurrent: isCurrent }),
  setShowMenu: (showMenu: boolean) => set({ showMenu: showMenu }),
}));
