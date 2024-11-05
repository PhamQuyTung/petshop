import { useState, useEffect, useRef, useCallback, useMemo, useReducer} from 'react';
import reducer, {initState} from './reducer';
import {setJob, addJob, deleteJob} from './actions';
import logger from './logger';

//Dispatch: 
function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    
    const { inputValue, jobs } = state; // Destructuring

    const inputRef = useRef();

    function handleSubmitBtn() {
        dispatch(addJob(inputValue));
        dispatch(setJob('')); // Reset inputValue
        inputRef.current.focus(); // Focus vào input khi nhấn nút ADD
    }

    return (
        <div style={{margin: 20}}>
            <h1>Todo</h1>

            <input 
                type='text'
                placeholder='Enter Todo...'
                ref={inputRef}
                value={inputValue}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />

            <button
                onClick={handleSubmitBtn}
            >
                Add
            </button>

            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <span onClick={() => dispatch(deleteJob(index))}>
                                &times;
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;