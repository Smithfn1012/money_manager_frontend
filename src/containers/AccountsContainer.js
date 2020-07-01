import React from 'react'
import {connect} from 'react-redux'
import AccountForm from '../components/AccountForm'
import AccountList from '../components/AccountList'

class AccountsContainer extends React.Component {
    render () {
        return (
            <div>
                <AccountForm />
                <AccountList />
            </div>
        )
    }
}

export default AccountsContainer;