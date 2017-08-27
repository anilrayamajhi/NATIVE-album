import {
  ARTIST_VALUE_CHANGE,
  ARTIST_CREATE,
  ARTIST_FETCH_SUCCESS,
  ARTIST_SAVE_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  genre: ''
}

//using es6 "key interpolation" on return value of
export default (state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ARTIST_VALUE_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case ARTIST_CREATE:
      return INITIAL_STATE
    case ARTIST_SAVE_SUCCESS:
      return INITIAL_STATE
    default:
    return state
  }
}
