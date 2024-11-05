import {SET_JOB, ADD_JOB, DELETE_JOB} from './constants';

// Tạo todo bằng useReducer có chức năng set, add, delete
// initState: giá trị khởi tạo của trạng thái inputValue là chuỗi rỗng: '', của jobs là mảng rỗng danh sách công việc []
export const initState = {
    inputValue: '',
    jobs: []
};

//Reducer: hàm quản lý trạng thái
const reducer = (state, action) => {
    // console.log("Action", action); // Hành động
    // console.log("PrevState", state); //Trạng thái trước đó
    switch(action.type) {
        case SET_JOB:
            return {
                ...state, 
                inputValue: action.payload 
            }
        case ADD_JOB:
            return {
                ...state, 
                jobs: [...state.jobs, action.payload] 
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)  // Xóa 1 phần tử công việc tại vị trí action.payload

            return {
                ...state, 
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action type')  // Bắt lỗi nếu action.type không phải là SET_JOB, ADD_JOB, DELETE_JOB
    }

    // console.log('New state', newState); //Trạng thái mới 
    

    // return newState // Hàm này bắt buộc trả về state 
}

export default reducer; //Vì đây là hàm reducer nên phải export default reducer