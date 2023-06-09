import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const DoneTask = ({ taskId, onDone }) => {
    
    const  doneTask = () => {
        onDone(taskId);
      };
    
    return (
        <div>
            <button className='done-btn' type='submit' onClick={doneTask}><FontAwesomeIcon icon={faCheck}/></button>

        </div>
    );
};

export default DoneTask;