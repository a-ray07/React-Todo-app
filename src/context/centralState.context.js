const { createContext,useState,useEffect } = require("react");


const CentralState = createContext()

export const CentralStateProvider = ({children}) =>{
    const [lists, setList] = useState([]);
    const [selectedListItemIndex, setSelectedListItemIndex] = useState("");
    useEffect(()=>{
        console.log("Central context", lists);
      },[lists]);
    

    return <CentralState.Provider value={{lists, setList, selectedListItemIndex, setSelectedListItemIndex}}>{children}</CentralState.Provider>
}

export default CentralState