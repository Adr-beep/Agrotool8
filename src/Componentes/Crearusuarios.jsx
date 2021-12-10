import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'
import '../static/css/CrearUsuarios.css';
import '../static/css/Default.css';
import logo from './img/logo.svg';

const url="http://localhost:5000/usuarios";
const cookies = new Cookies();


class Crearusuario extends Component{
    
    state={
        data:[],
        form:{
            nombre: '',
            funcion: '',
            correo: '',
            password:'',
        }
    }
    peticionPost=async()=>{
        await axios.post(url,this.state.form).then(response=>{
            console.log(response.data)
            this.peticionGet();
           
        }).catch(error=>{
            console.log(error.message);        
            })
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            console.log(response.data);
            this.setState({data:response.data});
        
        }).catch(error=>{
            console.log(error.message);
        })

    }

    

    handleChange= async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    console.log(this.state.form);

    }
    render(){
        const{form}=this.state;

    return (
      <body>
        
        <div className="container">
            
            <header className="header">
                
                <div className="header-left">
                    <div className="header-left-content">
                        <a href="#" className="link-logo">
                            <img src={logo} alt="" className="header-left-logo"/>
                        </a>
                    </div>
                </div>
                
                <div className="header-right">
                    <div className="header-right-content">
                        
                        <div>
                            <h1 className="admin">{ cookies.get('funcion')}</h1>
                        </div>
                        
                        <div >
                            <h2 className="nom">{ cookies.get('nombre')} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="black"/></svg></h2>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header">
                
                <div className="header-left">
                    <div className="header-left-content">
                        
                    </div>
                </div>
                
                <div className="header-right">
                    
                    <div className="header-right-content">
                        
                        <div className="header-right-search">
                            <h2>Nuevo Usuario</h2>
                        </div>
                        
                        
                    </div>
                </div>
            </header>
    
            
            <div className="content">
                
                <div className="content-left">
                    <div className="left-content">
                        
                        <nav className="top-content">
                            
                            <a href="/Panelusuarios/" className="item item-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                    <path d="M0.5 6C0.5 2.68629 3.18629 0 6.5 0H24.5C27.8137 0 30.5 2.68629 30.5 6V24C30.5 27.3137 27.8137 30 24.5 30H6.5C3.18629 30 0.5 27.3137 0.5 24V6Z" fill="#1E42FF"/>
                                    <path d="M13 15C15.2091 15 17 13.2091 17 11C17 8.79086 15.2091 7 13 7C10.7909 7 9 8.79086 9 11C9 13.2091 10.7909 15 13 15Z" fill="white"/>
                                    <path d="M13.67 16.02C13.45 16.01 13.23 16 13 16C10.58 16 8.32 16.67 6.39 17.82C5.51 18.34 5 19.32 5 20.35V23H14.26C13.47 21.87 13 20.49 13 19C13 17.93 13.25 16.93 13.67 16.02Z" fill="white"/>
                                    <path d="M23.75 19C23.75 18.78 23.72 18.58 23.69 18.37L24.83 17.36L23.83 15.63L22.38 16.12C22.06 15.85 21.7 15.64 21.3 15.49L21 14H19L18.7 15.49C18.3 15.64 17.94 15.85 17.62 16.12L16.17 15.63L15.17 17.36L16.31 18.37C16.28 18.58 16.25 18.78 16.25 19C16.25 19.22 16.28 19.42 16.31 19.63L15.17 20.64L16.17 22.37L17.62 21.88C17.94 22.15 18.3 22.36 18.7 22.51L19 24H21L21.3 22.51C21.7 22.36 22.06 22.15 22.38 21.88L23.83 22.37L24.83 20.64L23.69 19.63C23.72 19.42 23.75 19.22 23.75 19ZM20 21C18.9 21 18 20.1 18 19C18 17.9 18.9 17 20 17C21.1 17 22 17.9 22 19C22 20.1 21.1 21 20 21Z" fill="white"/>
                                    </svg>
                                <h2>Usuarios</h2>
                            </a>
                            <a href="/Panelpredios" className="item item-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><rect width="30" height="30" rx="6" fill="#4D4D4D"/><path d="M20 18H22V10C22 8.9 21.1 8 20 8H12V10H20V18ZM10 20V4H8V8H4V10H8V20C8 21.1 8.9 22 10 22H20V26H22V22H26V20H10Z" fill="white"/></svg>
                                <h2>Predios</h2>
                            </a>
                            <a href="/Panelcultivos" className="item item-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <rect width="30" height="30" rx="6" fill="#4D4D4D"/>
                                    <path d="M15 23H5V21H10.75C10.02 18.19 7.81 15.99 5 15.26C5.64 15.1 6.31 15 7 15C11.42 15 15 18.58 15 23ZM25 15.26C24.36 15.1 23.69 15 23 15C20.07 15 17.52 16.58 16.12 18.93C16.41 19.59 16.65 20.28 16.79 21C16.92 21.65 16.99 22.32 16.99 23H18.99H24.99V21H19.24C19.98 18.19 22.19 15.99 25 15.26ZM18.64 14.02C19.42 11.93 20.87 10.18 22.73 9.02C18.44 9.16 15 12.67 15 17C15 17.01 15 17.02 15 17.02C15.95 15.75 17.2 14.72 18.64 14.02ZM14.42 11.85C13.58 9.66 11.88 7.89 9.7 7C11.14 8.86 12 11.18 12 13.71C12 13.92 11.97 14.12 11.96 14.32C12.39 14.56 12.79 14.84 13.18 15.14C13.39 13.96 13.83 12.85 14.42 11.85Z" fill="white"/>
                                    </svg>
                                <h2>Cultivos</h2>
                            </a>
                        </nav>
                        
                        
                    </div>
    
                </div>
    
                
                <div className="content-right">

                <div class="right-content">
                        <div>
                        <h2>Información  del Usuario</h2>
                        </div>
                        <form action="" method="" id="frm-test" autocomplete="off" enctype="multipart/form-data">
                            <div class="frow frow-1">
                                <div class="fitem fitem1-6">
                                    <input type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form.nombre} required />
                                    <label for="nombre">Nombre </label>
                                </div>
                                <div class="fitem fitem1-2">
                                    <input type="text" id="funcion" name="funcion" onChange={this.handleChange} value={form.funcion} required />
                                    <label for="funcion">Funcion</label>
                                </div>
                                <div class="fitem fitem1-3">
                                    <input type="email" id="correo" name="correo" onChange={this.handleChange} value={form.correo}  required />
                                    <label for="correo">Correo</label>
                                </div>
        
                            </div>
                            <div class="frow frow-1">
                                <div class="fitem fitem1-1">
                                    <input type="password" id="password" name="password" onChange={this.handleChange} value={form.password}  required />
                                    <label for="password">Contraseña</label>
                                </div>
                                
                                
                            </div> 
                    
                            <div className="frow frow-4">
                                <div className="fdiv fdiv-2">
                                    <button type="submit" onClick={()=>this.peticionPost()} className="dbutton dbutton-1">Guardar</button>
                                    <a href="/Panelusuarios/" className="dbutton dbutton-2">
                                        <h2>Cancelar</h2>
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    </body>  
    )
}
}

export default Crearusuario;