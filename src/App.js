import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/accounts')
    .then(resp => resp.json())
    .then(data => console.log(data))

  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(mapStateToProps, {fetchAccounts})(App);
