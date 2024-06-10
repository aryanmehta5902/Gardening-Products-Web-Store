import {combineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducers=combineReducers({
    cart:productReducer,
});

export default reducers;