import { create } from 'zustand'

type themeState={
    theme:string,
    toggleTheme: ()=>void
}

const useThemeStore = create<themeState>((set) => {
    return{
        theme: "dark",
        toggleTheme: () => set((state) => {
            const newTheme= state.theme==="dark"?"light":"dark";
            localStorage.setItem("theme",newTheme);
            document.documentElement.classList.toggle("dark",newTheme==='dark');
            return {theme:newTheme};
        }),
    }
})

export default useThemeStore;