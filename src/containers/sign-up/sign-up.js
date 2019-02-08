import React, {Component} from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import registerAction from './actions'

class SignUp extends Component {

    state = {
        'username': '',
        'email': '',
        'password': ''
    }

    getInputStyle() {
        return {
            height: '22px',
            width: '190px',
            marginBottom: '10px',
            marginTop: '10px'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            ...this.state
        };
        console.log(data)
        const {registerUser} = this.props;
        registerUser({ user: data });
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <hr style={{marginTop: '50px'}}/>
                <form>
                    <div>
                        < input name={"email"} style={this.getInputStyle()} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input name={"username"} style={this.getInputStyle()} onChange={this.onChange}/>
                    </div>
                    <div>
                        <input name={"password"} style={this.getInputStyle()} onChange={this.onChange}/>

                    </div>

                    <button name={"sign-up"} onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    register: state.register

});

const mapDispatchToProps = dispatch => bindActionCreators({
    registerUser: registerAction

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)