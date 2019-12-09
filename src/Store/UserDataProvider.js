import React, {createContext, useReducer} from 'react';

const initialState = {
    userData: {},
  profileData: {}
};

export const UserDataProvider = createContext(initialState);

const setUserData = (state, userData) => {

  return {...state, userData: userData};
};

const setProfileData = (state, profileData) => {

  return {...state, profileData: profileData};
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_DATA':
      return setUserData(state, action.userData);
    case 'PROFILE_DATA':
      return setProfileData(state, action.profileData);
    default:
      return state;
  }
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(
    reducer,
    props.initialState || initialState,
  );

  return (
    <UserDataProvider.Provider value={{state, dispatch}}>
      {props.children}
    </UserDataProvider.Provider>
  );
};
