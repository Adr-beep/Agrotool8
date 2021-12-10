import React, {Component} from 'react';
import '../static/css/Login.css';
import '../static/css/Default.css';
import logo from './img/logo.svg';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'
import Modal from 'react-modal';


const baseUrl="http://localhost:5000/usuarios";
 
const cookies = new Cookies();

class Login extends Component{
    state={
        form:{
            usuario: '',
            password: ''
        }
    }

    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        })
        console.log(this.state.form);
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {usuario:this.state.form.usuario, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then (response=>{
            if(response.length>0){
                var respuesta= response[0];
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('usuario', respuesta.usuario, {path: "/"});
                cookies.set('correo', respuesta.correo, {path: "/"});
                cookies.set('funcion', respuesta.funcion, {path: "/"});
                alert(`Bienvenido, ${respuesta.nombre}`);
                window.location.href="./Panelusuarios";



            }else{
                alert('El usuario o la contraseña no son correctos')
            }
        })
        .catch(error=>{
            console.log(error)
        })

    }

    componentDidMount(){
        if(cookies.get('usuario')){
            window.location.href="./Panelusuarios";
        }
    }

render(){
  return (
    <body>
    <div className="form-section">
    <div className="form-container">
        <div className="form-content">
            <div className="form-logo">
            <img src={logo} alt="" className="header-left-logo"/>            
            </div>
            <div className="form-inputs">
                <div className="form-login" action="/" method="">
                    <div className="login-item i-user">
                        <input type="text" name="usuario" defaultValue="" id="usuario" onChange={this.handleChange} required/>
                        <label for="usuario">Usuario</label>
                    </div>
                    <div className="login-item i-password">
                        <input type="password" name="password"  defaultValue="" id="password" onChange={this.handleChange} required/>
                        <label for="password">Contraseña</label>
                    </div>
                    <div class="login-item i-login">
                        <a  href="/Registro" className="button-1" type="submit" name="">Crear cuenta</a>
                        <button className="button-2" type="submit" onClick={()=>this.iniciarSesion()} name="">Iniciar sesión</button>
                    </div>
                    <div  className="login-text">
                        <p className="text-policy">This site is protected by reCAPTCHA and the <b>Agricola Ibiza Privacy Policy and Terms of Service</b> apply.
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
    </body>
  );
}
}

export default Login;
