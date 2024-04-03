// dateStore.ts
import { create } from "zustand";

type DateStore = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
};

export const useDateStore = create<DateStore>((set) => ({
  date: undefined,
  setDate: (date) => set({ date }),
}));
