import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import {API} from "../api";
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

function* getGroups() {
    const response = yield call(API.getGroups);
    yield put({ type: get_groups_success, response: response});
}

function* getStudents() {
    const response = yield call(API.getStudents);
    yield put({ type: GET_STUDENTS_SUCCESS, response: response});
}

function* getCollection({data}) {
    const response = yield call(API.getCollection, data);
    yield put({ type: GET_COLLECTION_SUCCESS, response: {data: response, type: data}});
}

function* getDeepCollection({data}) {
    const response = yield call(API.getDeepCollection, data);
    yield put({ type: GET_DEEP_COLLECTION_SUCCESS, response: {data: response, type: data}});
}

function* authorize({payload}) {
    const response = yield call(API.authorize, payload);
    yield put({ type: authorize_success, response: response});
}

export default function* rootSaga() {
   yield all([
       yield takeEvery(GET_COLLECTION_REQUEST, getCollection),
       yield takeEvery(GET_DEEP_COLLECTION_REQUEST, getDeepCollection),
       yield takeLatest(GET_STUDENTS_REQUEST, getStudents),
       yield takeLatest(get_groups_request, getGroups),
       yield takeLatest(authorize_request, authorize),
   ]);
}