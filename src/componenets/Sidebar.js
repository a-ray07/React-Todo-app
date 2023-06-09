import React,{useState,useContext} from 'react';
import { v4 as uuid } from 'uuid';
import CentralState from '../context/centralState.context';


const Sidebar = () => {
    const {lists, setList, selectedListItemIndex, setSelectedListItemIndex} = useContext(CentralState)
    const [listName, setListName] = useState('');

    const addList = ()=>{
        setList((prev)=>{
            const list = [...prev];
            list.push({
                id: uuid(),
                listName:listName,
                allTodos:[]
            });
            return list;
        });
        setListName("");
    }

    return (
        <div className='side-bar'>
            <h3 className='hdr-name'>Add New List</h3><br />
            <div>
                <input  className='inp' type="text" value={listName} onChange={(e)=>setListName(e.target.value)} placeholder='Add List Name' />
                <button className='btn' onClick={addList}>Add</button>
            </div>
            <h3 className='hh'>Lists</h3>
            <ol className='num'>
            {
                lists.map((list, index) => (
                    <li key={list.id}><div className='sidebarList' onClick={()=>{setSelectedListItemIndex(index)}}>{list.listName}</div></li>
                ))
            }
            </ol>
        </div>
    );
};

export default Sidebar;