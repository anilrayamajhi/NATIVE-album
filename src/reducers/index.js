import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
import AuthReducer  from './AuthReducer'
import ArtistFormReducer from './ArtistFormReducer'
import ArtistReducer from './ArtistReducer'

export default combineReducers({
  techData: LibraryReducer,
  techSelectionId: SelectionReducer,
  auth: AuthReducer,
  artistForm: ArtistFormReducer,
  artists: ArtistReducer
})
