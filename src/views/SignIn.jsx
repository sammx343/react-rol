import React, { Component } from 'react';
import '../style/signIn.css';
import '../style/general.css';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={"single-page"}>
                <div className="container">
                    <h1> Iniciar Sesión </h1>
                    <form className="sign-in" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="input-correo">Correo electrónico</label>
                            <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" name="email" id="input-correo" aria-describedby="emailHelp" placeholder="Ingresar correo"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-password">Contraseña</label>
                            <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="password" id="input-password" placeholder="Ingresar contraseña"></input>
                        </div>
                        <button type="submit" className="btn btn-primary" value="Submit" >Ingresar</button>
                        <small className="form-text "> <a href="/sign-up"> Si no tienes cuenta, registrate</a> </small>
                    </form>
                </div>
            </div>
        )
    }
}
