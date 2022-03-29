import {
    authorize_request,
    authorize_success,
    GET_COLLECTION_REQUEST,
    GET_COLLECTION_SUCCESS,
    GET_DEEP_COLLECTION_REQUEST,
    GET_DEEP_COLLECTION_SUCCESS,
    get_groups_request,
    get_groups_success,
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS
} from "../constants/actions";

const reducer = (state = {}, action) => {
 switch (action.type) {
     case get_groups_request:
         return { ...state, loading: true };
     case get_groups_success:
         console.log('action', action);
         return { ...state, groups: action.response, loading: false }
     case authorize_request:
         return { ...state, loading: true };
     case authorize_success:
         console.log('action', action);
         return { ...state, isAuthorized: action.response, loading: false }

     case GET_STUDENTS_REQUEST:
         return { ...state, loading: true };
     case GET_STUDENTS_SUCCESS:
         console.log('action', action);
         return { ...state, students: action.response, loading: false }

     case GET_COLLECTION_REQUEST:
         return { ...state, loading: true };
     case GET_COLLECTION_SUCCESS:
         console.log('GET_COLLECTION_SUCCESS', action);
         return { ...state, [action.response.type]: action.response.data, loading: false }

     case GET_DEEP_COLLECTION_REQUEST:
         return { ...state, loading: true };
     case GET_DEEP_COLLECTION_SUCCESS:
         return { ...state,
             deepInfo: {...state.deepInfo, [action.response.type[2]]: action.response.data},
             loading: false
         }

   default:
        return state;
 }
};

export default reducer;
