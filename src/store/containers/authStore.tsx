import { create } from "zustand";

interface AuthState {
  user: any,
  isLoggedIn: Boolean,
  setUser?: (a: any)=> void,
  setIsLoggedIn?: (a: Boolean)=> void,
}





const useAuthStore = create<AuthState>((set) => ({
  user: {},
  isLoggedIn: false,
  setUser: (payload) => set((state) => ({...state, user: payload })),
  setIsLoggedIn: (payload) => set((state) => ({...state, isLoggedIn: payload }))

}));

export default useAuthStore;
