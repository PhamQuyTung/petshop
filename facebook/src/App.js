import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Your name is: {props.name}</p> {/* Hiển thị dữ liệu nhận từ props */}
    </div>
  );
}

export default App;
