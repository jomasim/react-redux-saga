import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from './actions';
import { Form, Button, Checkbox, Card } from 'semantic-ui-react';

class SignUp extends Component {

  container = () => {
    return {
      margin: 'auto',
      width: '30%',
      marginTop: '12%',
    };
  };
  card =()=>{
    return {
      width: '100%',
    }
  }
  label = () => {
    return {
      display: 'block',
      float: 'left',
    };
  };

  button = () => {
    return {
      float: 'left',
      marginTop: '15px',
    };
  };
  check = () => {
    return {
      float: 'left',
      marginTop: '5px',
    };
  };
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    const { registerUser } = this.props;

    e.preventDefault();

    const data = {
      ...this.state
    };

    registerUser(data);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render () {
    return (
      <div style={this.container()}>
        <Card style={this.card()}>
          <Card.Content>
            <Card.Header>Authors Haven Sign Up</Card.Header>
            <Form>
              <Form.Field>
                <label style={this.label()}>Email</label>
                <input name={'email'} placeholder='Email' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label style={this.label()}>Username</label>
                <input name={'username'} placeholder='Username' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label style={this.label()}>Password</label>
                <input name={'password'} placeholder='Password' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label style={this.label()}>Confirm Password</label>
                <input placeholder='Confirm Password' />
              </Form.Field>
              <Form.Field>
                <Checkbox style={this.check()} label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit' style={this.button()} onClick={this.handleSubmit}>Submit</Button>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ register }) => ({
  register: register

});

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
