import {createStore} from 'redux';
import bookingReducer from './bookingStore/reducers';

const store = createStore(bookingReducer)

export default store