import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import AccountList from '../components/AccountList'
import Account from '../components/Account'
import AccountForm from '../components/AccountForm'
import Navbar from '../components/Navbar'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <div>
            <Navbar/>
            <Switch>
              <Route path='/accounts/new' component={AccountForm}/>
              <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
              <Route path='/accounts' render={(routerProps) => <AccountList {...routerProps} accounts={this.props.accounts}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)