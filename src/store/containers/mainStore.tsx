import { create } from "zustand";

interface MainState {
  theme: any,
  language: String,
  setTheme?: (a: any)=> void,
  setLanguage?: (a: String)=> void,
}





const useMainStore = create<MainState>((set) => ({
  theme: {},
  language: "vi",
  setTheme: (payload) => set((state) => ({...state, theme: payload })),
  setLanguage: (payload) => set((state) => ({...state, language: payload }))

}));

export default useMainStore;
