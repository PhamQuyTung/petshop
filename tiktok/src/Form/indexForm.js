import { useState, useEffect, useRef, useCallback, useMemo, useReducer} from 'react';
import reducer from './Form';
import {SET_USERNAME, SET_PASSWORD, ADD_FORM, DELETE_FORM, setUsername, setPassword, addForm, deleteForm} from './constantsForm';
import {initState} from './Form';
// Component chính
function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleUsernameChange = (e) => {
        dispatch(setUsername(e.target.value));
    }

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addForm());
        dispatch(setUsername(""));
        dispatch(setPassword(""));
    }

    return (
        <div style={{padding: 20}}>
            <h1>Form</h1>

            <div style={{marginBottom: 20}}>
                <div>
                    <h3 style={{marginBottom: 5}}>Username: </h3>
                    <input 
                        type='text'
                        value={state.username} // truyền giá trị từ state vào đây
                        onChange={handleUsernameChange} // xử lý sự kiện onChange
                        placeholder='Enter your name...'
                    />        
                </div>
                
                <div>
                    <h3 style={{marginBottom: 5}}>Password: </h3>
                    <input 
                        type='password'
                        value={state.password} // truyền giá trị từ state vào đây
                        onChange={handlePasswordChange} // xử lý sự kiện onChange
                        placeholder='Enter your password...'
                    />        
                </div>
            </div>
            
            <button onClick={handleFormSubmit}>Submit</button>

            <ul>
                {state.formList.map((form, index) => (
                    <li key={index}>
                        <strong>ID: {index}</strong> - Username: {form.username}, Password: {form.password}
                    </li>
                ))}
            </ul>
            
            <button onClick={() => dispatch(deleteForm(state.formList.length - 1))}>Delete Last</button>
        </div>
    );
}

export default App;