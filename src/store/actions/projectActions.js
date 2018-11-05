export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase}) => {
    const firestore = getFirestore()

    const profile = getState().firebase.profile
    const uid = getState().firebase.auth.uid

    console.log(profile)

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err)
    });
  }
};