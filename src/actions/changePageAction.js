export const changePageAction = (path) => dispatch => {
  dispatch({
    type: 'CHANGE_PAGE',
    payload: path
  })
}
