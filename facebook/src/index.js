import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from'react';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  function ParentComponent() {
    const [name, setName] = useState(''); // Khởi tạo state cho tên
  
    const handleNameChange = (event) => {
      setName(event.target.value); // Cập nhật state khi người dùng nhập liệu
    };
  
    return (
      <div>
        <h1>Parent Component</h1>
        <input 
          type="text" 
          value={name} 
          onChange={handleNameChange} 
          placeholder="Enter your name" 
        />
        <App name={name} /> {/* Truyền dữ liệu xuống component con */}
      </div>
    );
  }
  // <App />
);

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
