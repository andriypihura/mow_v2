export default (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
