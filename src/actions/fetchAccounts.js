export function fetchAccounts() {
    return (dispatch) => {
      fetch('http://localhost:3001/accounts')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts
      }))
    }
}