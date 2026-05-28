// 'use client'
// import { useState, useContext, createContext } from "react";
// const AppContext= createContext();

// export const AppContextProvider=({children})=>{
//     const {favoritos,setFavoritos}=useState([
//         {name:'Pizza'},
//         {name:'empanadas'}
//     ]);
    
//     return(
//         <AppContext.Provider value={{favoritos, setFavoritos}}>
//             {children}
//         </AppContext.Provider>
//     )

// }
// export const useAppContext=()=>{
//     const context= useContext(AppContext);
//     if(!context){
//         throw new Error('UseAppContext solo puede ser usado dentro del provider')
//     }



//     return context
// }
// export default AppContext;