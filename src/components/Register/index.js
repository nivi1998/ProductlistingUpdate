import React, { Component } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addUsers } from '../../redux/features/registerData';
import Loading from '../loader';
import './Register.scss';

const registerSchema = Yup.object().shape({
  // username: Yup.string()
  // 	.email('Invalid email address format')
  // 	.required('Email is required'),
  // password: Yup.string()
  // 	.min(3, 'Password must be 3 characters at minimum')
  // 	.required('Password is required'),
});

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: '',
    };
  }
  render() {
    return (
      <div id="register">
        <div className="container">
          {this.props.loading ? (
            <Loading />
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={registerSchema}
                  onSubmit={(values) => {
                    this.props.dispatch(addUsers(values));
                    window.location.href = '/';
                  }}
                >
                  <div className="sub-box">
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Register</h1>
                      </div>
                    </div>
                    <Form>
                      <div className="form-group headText aligment setMargin">
                        <label htmlFor="email">username</label>
                        <Field
                          type="text"
                          name="username"
                          placeholder="Enter Username"
                          autocomplete="off"
                        />

                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group headText aligment setMargin">
                        <label htmlFor="password" className="mt-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4 setMargin"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                </Formik>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.register.loading,
  };
}

export default connect(mapStateToProps)(Register);
