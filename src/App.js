import React from 'react';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import {fetchAccounts} from './actions/fetchAccounts'

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name:"Checking"}})
  // }

  render() {
    return (
      <div className="App">
        <AccountsContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) {
//     return {
//       accounts: state.accounts
//     }
// }

export default App;
