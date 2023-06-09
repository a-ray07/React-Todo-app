import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CentralState from '../context/centralState.context';

const DeleteTask = ({ deleteTask }) => {
  const { lists, setList, selectedListItemIndex, setSelectedListItemIndex } = useContext(CentralState)



  useEffect(() => {
    console.log('flash')
  })
  return (
    <div>
      <button className='del-btn' onClick={deleteTask}>
        <FontAwesomeIcon icon={faTrash} /></button>

    </div>
  );
};

export default DeleteTask;