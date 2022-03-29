import {
      get_groups_request,
      authorize_request,
      GET_STUDENTS_REQUEST,
      GET_COLLECTION_REQUEST, GET_DEEP_COLLECTION_REQUEST
} from "../constants/actions";

export const getNews = () => ({
      type: 'GET_NEWS',
});

export const getGroupsRequest = () => ({
      type: get_groups_request,
});

export const authorizeRequest = (info) => ({
      type: authorize_request,
      data: info
});

export const getStudentsRequest = () => ({
      type: GET_STUDENTS_REQUEST,
});

export const getCollectionRequest = (data) => {
      return {
            type: GET_COLLECTION_REQUEST,
            data: data
      }
};

export const getDeepCollectionRequest = (data) => {
      return {
            type: GET_DEEP_COLLECTION_REQUEST,
            data: data
      }
};