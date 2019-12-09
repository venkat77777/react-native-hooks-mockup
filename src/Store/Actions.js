export const addUserData = (user, dispatch) => {
  dispatch({
    type: 'USER_DATA',
    userData: user,
  });
};

export const addProfileData = (profile, dispatch) => {
  dispatch({
    type: 'PROFILE_DATA',
    profileData: profile,
  });
};
