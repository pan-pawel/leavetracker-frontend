import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import '../../../styles/board/credentials/registrationPage.css'
import {connect} from 'react-redux'
import {getErrors, getEmailAlreadyUsed} from "../../../reducers/registerUserReducer";
import {registerUser, checkEMailAvailability} from "../../../actions/registerUserActions";

class RegistrationPage extends Component {

  render() {
    return (
      <div className="registration-page">
        <h2> Sign up </h2>
        <RegistrationForm
          registerUser = {this.props.registerUser}
          errors = {this.props.errors}
          emailAlreadyUsed = {this.props.emailAlreadyUsed}
          checkEmailAvailability = {this.props.checkEmailAvailability}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: getErrors(state),
    emailAlreadyUsed: getEmailAlreadyUsed(state)
  }
};

const mapDispatchToProps = (dispatch) =>  {
  return {
    registerUser: (userData) => {
      dispatch(registerUser(userData))
    },
    checkEmailAvailability: (emailAdress) => {
      dispatch(checkEMailAvailability(emailAdress))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);