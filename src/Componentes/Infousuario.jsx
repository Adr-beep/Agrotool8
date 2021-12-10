import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import '../static/css/Infousuario.css';
import '../static/css/Default.css';
import logo from './img/logo.svg';

const cookies = new Cookies();
const url="hhttp://localhost:5000/usuarios";

class Infousuario extends Component{
    render(){
        console.log('nombre:' + cookies.get('nombre'));
        console.log('usuario:' + cookies.get('usuario'));
        console.log('correo:' + cookies.get('correo'));
    return(
    <body>
        <div class="container">
        
        <header class="header">
            
            <div class="header-left">
                <div class="header-left-content">
                    <a href="#" class="link-logo">
                        <img src={logo} alt="" class="header-left-logo"/>
                    </a>
                </div>
            </div>
            
            <div class="header-right">
                <div class="header-right-content">
                    
                    <div>
                        <h1 class="admin">{ cookies.get('funcion')}</h1>
                    </div>
                    
                    <div >
                        <h2 class="nom">{ cookies.get('nombre')} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="black"/></svg></h2>
                    </div>
                </div>
            </div>
        </header>
       
    <header class="header">
        
        <div class="header-left">
            <div class="header-left-content">
                
            </div>
        </div>
        
        <div class="header-right">
            
            <div class="tci tci-6">
                <a href="/edituser/{{user.0}}" class="tci-edit-link">
                    <div class="tci-edit-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect x="0.559937" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#DDDCDF"/>
                            <path d="M11.8099 25C11.8099 26.1 12.7099 27 13.8099 27H21.8099C22.9099 27 23.8099 26.1 23.8099 25V13H11.8099V25ZM24.8099 10H21.3099L20.3099 9H15.3099L14.3099 10H10.8099V12H24.8099V10Z" fill="#4D4D4D"/>
                            </svg>
                    </div>
                </a>
                <a href="/deleteuseruser/{{user.0}}" class="tci-del-link">
                    <div class="tci-del-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                            <rect x="1.05994" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#DDDCDF"/>
                            <path d="M9.30994 23.2501V27.0001H13.0599L24.1199 15.9401L20.3699 12.1901L9.30994 23.2501ZM27.0199 13.0401C27.4099 12.6501 27.4099 12.0201 27.0199 11.6301L24.6799 9.29006C24.2899 8.90006 23.6599 8.90006 23.2699 9.29006L21.4399 11.1201L25.1899 14.8701L27.0199 13.0401Z" fill="#4D4D4D"/>
                            </svg>
                    </div>
                </a>
            </div>
        </div>
    </header>

        
        <div class="content">
            
            <div class="content-left">
                <div class="left-content">
                    
                    <nav class="top-content">
                        
                        <a href="/Panelusuarios/" class="item item-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <path d="M0.5 6C0.5 2.68629 3.18629 0 6.5 0H24.5C27.8137 0 30.5 2.68629 30.5 6V24C30.5 27.3137 27.8137 30 24.5 30H6.5C3.18629 30 0.5 27.3137 0.5 24V6Z" fill="#1E42FF"/>
                                <path d="M13 15C15.2091 15 17 13.2091 17 11C17 8.79086 15.2091 7 13 7C10.7909 7 9 8.79086 9 11C9 13.2091 10.7909 15 13 15Z" fill="white"/>
                                <path d="M13.67 16.02C13.45 16.01 13.23 16 13 16C10.58 16 8.32 16.67 6.39 17.82C5.51 18.34 5 19.32 5 20.35V23H14.26C13.47 21.87 13 20.49 13 19C13 17.93 13.25 16.93 13.67 16.02Z" fill="white"/>
                                <path d="M23.75 19C23.75 18.78 23.72 18.58 23.69 18.37L24.83 17.36L23.83 15.63L22.38 16.12C22.06 15.85 21.7 15.64 21.3 15.49L21 14H19L18.7 15.49C18.3 15.64 17.94 15.85 17.62 16.12L16.17 15.63L15.17 17.36L16.31 18.37C16.28 18.58 16.25 18.78 16.25 19C16.25 19.22 16.28 19.42 16.31 19.63L15.17 20.64L16.17 22.37L17.62 21.88C17.94 22.15 18.3 22.36 18.7 22.51L19 24H21L21.3 22.51C21.7 22.36 22.06 22.15 22.38 21.88L23.83 22.37L24.83 20.64L23.69 19.63C23.72 19.42 23.75 19.22 23.75 19ZM20 21C18.9 21 18 20.1 18 19C18 17.9 18.9 17 20 17C21.1 17 22 17.9 22 19C22 20.1 21.1 21 20 21Z" fill="white"/>
                                </svg>
                            <h2>Usuarios</h2>
                        </a>
                        <a href="/Panelpredios" class="item item-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><rect width="30" height="30" rx="6" fill="#4D4D4D"/><path d="M20 18H22V10C22 8.9 21.1 8 20 8H12V10H20V18ZM10 20V4H8V8H4V10H8V20C8 21.1 8.9 22 10 22H20V26H22V22H26V20H10Z" fill="white"/></svg>
                            <h2>Predios</h2>
                        </a>
                        <a href="/Panelcultivos" class="item item-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <rect width="30" height="30" rx="6" fill="#4D4D4D"/>
                                <path d="M15 23H5V21H10.75C10.02 18.19 7.81 15.99 5 15.26C5.64 15.1 6.31 15 7 15C11.42 15 15 18.58 15 23ZM25 15.26C24.36 15.1 23.69 15 23 15C20.07 15 17.52 16.58 16.12 18.93C16.41 19.59 16.65 20.28 16.79 21C16.92 21.65 16.99 22.32 16.99 23H18.99H24.99V21H19.24C19.98 18.19 22.19 15.99 25 15.26ZM18.64 14.02C19.42 11.93 20.87 10.18 22.73 9.02C18.44 9.16 15 12.67 15 17C15 17.01 15 17.02 15 17.02C15.95 15.75 17.2 14.72 18.64 14.02ZM14.42 11.85C13.58 9.66 11.88 7.89 9.7 7C11.14 8.86 12 11.18 12 13.71C12 13.92 11.97 14.12 11.96 14.32C12.39 14.56 12.79 14.84 13.18 15.14C13.39 13.96 13.83 12.85 14.42 11.85Z" fill="white"/>
                                </svg>
                            <h2>Cultivos</h2>
                        </a>
                    </nav>
                    
                    
                </div>

            </div>

            
            <div class="content-right">
                
                
                <div class="right-content">
                    <div>
                    <h2>Información  del Usuario</h2>
                    </div>
                    <form action="/newUser" method="post" id="frm-test" autocomplete="off" enctype="multipart/form-data">
                        <div class="frow frow-1">
                            <div class="fitem fitem1-6">
                                <input type="text" name="username" id="username" required value="María Lurdes Sierra Díaz"/>
                                <label for="username">Nombre </label>
                            </div>
                            <div class="fitem fitem1-2">
                                <input type="email" id="email" name="mail" required value="marialurdes@ibiza.com"/>
                                <label for="email">correo</label>
                            </div>
                            <div class="fitem fitem1-3">
                                <input type="password" id="password" name="password" required value="asda2312idsj11123d"/>
                                <label for="password">Contraseña</label>
                            </div>
    
                        </div>
                        <div class="frow frow-1">
                            <div class="fitem fitem1-6">
                                <input type="text" id="funcion" name="funcion" required value="Administrador"/>
                                <label for="funcion">funcion</label>
                            </div>
                            <div class="fitem fitem1-2">
                                <input type="number" id="date" name="date" required value= "18072002"/>
                                <label for="date">Fecha de ingreso</label>
                            </div>
                            <div class="fitem fitem1-3">
                                <input type="number" id="identificacion" name="identificacion" required value="1005459752"/>
                                <label for="identificacion">Identificacion</label>
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

export default Infousuario;