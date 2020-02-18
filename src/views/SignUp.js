import React, { Component } from 'react';
import {signUp} from '../services/authentication';
import '../style/signIn.css';
import '../style/general.css';
import {
    withRouter
  } from 'react-router-dom'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            lastName: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const params = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastName: this.state.lastName
        };
        signUp(params, response => {
            if(response.response.body.success){
                console.log(response.response.body.results.message);
                this.props.history.push('/games');
            }else{
                console.log(response.response.body.results.message);
            }
        });
    }

    render() {
        return (
            <div className={"single-page"}>
                <div className="container">
                    <h1> Registrate </h1>
                    <form className="sign-in" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="input-correo">Correo electrónico</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" id="input-correo" aria-describedby="emailHelp" placeholder="Ingresar correo"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-name">Nombre</label>
                            <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" name="name" id="input-name" aria-describedby="nameHelp" placeholder="Ingresar nombre"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-last-name">Apellido</label>
                            <input type="text" value={this.state.lastName} onChange={this.handleChange} className="form-control" name="lastName" id="input-last-name" aria-describedby="lastNameHelp" placeholder="Ingresar apellido"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password">Contraseña</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="password" id="input-password" placeholder="Ingresar contraseña"></input>
                        </div>
                        <button type="submit" className="btn btn-primary" value="Submit" >Crear Cuenta</button>
                        <small className="form-text "> <a href="/"> Si ya tienes cuenta, inicia sesión</a> </small>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp)
