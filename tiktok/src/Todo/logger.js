import reducer from "./reducer";

function logger() {
    return (prevState, action) => {
        console.group(action.type);;
            console.log('Previous State:', prevState);
            console.log('Action:', action);
            
            const newState = reducer(prevState, action);

            console.log('New State:', newState);
        console.groupEnd();
        
        return newState;
    }
}

export default logger;