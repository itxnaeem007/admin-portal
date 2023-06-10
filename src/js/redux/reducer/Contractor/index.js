import {GET_USER,UPDATE_ACCESS,UPDATE_STATUS} from '../../actions';

const initData = {
    users: [],
    total: 0,
}

const reducer = (state = initData,action) => {
    switch (action.type){
        case GET_USER: {
            return {
                ...state,
                total : action.payload.total,
                users: action.payload.users,
                
            };
        }
        case UPDATE_ACCESS:{
            return {
                ...state,
                users:state.data.filter(c => c.id !== action.payload)
            }
        }

        case UPDATE_STATUS:
            return {
                ...state,
                users:state.data.filter(c => c.id !== action.payload)
            }
    
        default: {
            return {
                ...state,
            }
        }
    }
}
export default reducer;