export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove before implementing
  token:
    'BQCvZ7RLyCogOPR2RFrv30ZeQNdyaZodKNMerB0pUsp_SanMMh1gC1w2-8bLbCRKfipV4uMumcdd-tt8ALtyvha3s6z3qN7imyMNfQocFy6dSKYtQ8pO_8eJdjkQT0ZIdqsf9GJvZaWBkKzhq8tUAhlkODCHj8OTgQ',
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    default:
      return state
  }
}

export default reducer
