import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  ARTIST_VALUE_CHANGE,
  ARTIST_CREATE ,
  ARTIST_FETCH_SUCCESS,
  ARTIST_SAVE_SUCCESS
} from './types'

export const artistUpdate = ({ prop, value }) => {
  return {
    type: ARTIST_VALUE_CHANGE,
    payload: { prop, value}
  }
}

// note: no action was dispatch as this is meant to send data to firebase.
// The return statement is a workaround to bypass redux thunk
export const artistCreate = ({name, phone, genre }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/artists`)
    .push({ name, phone, genre })
    .then(() => {
      dispatch({ type: ARTIST_CREATE });
      Actions.pop()
    })
  }
}

export const artistFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/artists`)
      .on('value', snapshot => {
        dispatch({type: ARTIST_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}


export const artistSave = ({name, phone, genre, uid }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/artists/${uid}`)
    .set({ name, phone, genre })
    .then(() => {
      dispatch({ type: ARTIST_SAVE_SUCCESS });
      Actions.pop()
    })
  }
}

export const artistDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/artists/${uid}`)
    .remove()
    .then(() => {
      Actions.pop()
    })
  }
}


// export const employeeDelete = ({ uid }) => {
//   const { currentUser } = firebase.auth();

//   return () => {
//     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
//       .remove()
//       .then(() => {
//         Actions.employeeList({ type: 'reset' });
//       });
//   };
// };
