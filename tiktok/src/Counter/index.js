import { useState, useEffect, useRef, useCallback, useMemo, useReducer} from 'react';
import reducer from './reducer';
import {initState, INCREMENT, DECREMENT, RESET} from './constants'

/*
    Bài tập này sẽ giúp người mới làm quen với useReducer hiểu rõ hơn về cách quản lý trạng thái phức tạp bằng cách xây dựng một ứng dụng đơn giản quản lý đếm số (Counter) với ba chức năng: tăng, giảm, và reset.

    Bài tập: Ứng dụng Counter sử dụng useReducer
    Mô tả:
        Ứng dụng sẽ hiển thị một số đếm ban đầu là 0.
        Người dùng có thể:
            Tăng số đếm lên 1.
            Giảm số đếm xuống 1.
            Reset số đếm về 0.
    Mục tiêu:
        Hiểu cách sử dụng useReducer thay vì useState để quản lý nhiều trạng thái hoặc các hành động khác nhau.
        Thực hành với các action và reducer cơ bản.
*/

//dispatch;
function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    
    return (
        <div style={{padding: 20}}>
            <h1>Counter with useReducer</h1>
            <h2>{state}</h2>
            <button onClick={() => dispatch({type: INCREMENT})}>Up</button>
            <button onClick={() => dispatch({type: DECREMENT})}>Down</button>
            <button onClick={() => dispatch({type: RESET})}>Reset</button>
        </div>
    );
}

export default App;