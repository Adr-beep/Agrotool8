import React, {Component} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import './Panelc.css';
import logo from '../img/logo.svg';
import predios from '../img/predios.svg';
import usuarios from '../img/Usuarios.svg';
import cultivos from '../img/cultivos.svg';
import Modal from 'react-modal';

const cookies = new Cookies();
const url=" http://localhost:5000/cultivos";

class Panelcultivos extends Component{
    cerrarSesion=()=>{
        cookies.remove('nombre', {path: "/"});
        cookies.remove('usuario', {path: "/"});
        cookies.remove('correo', {path: "/"});
        window.location.href='/';
    }

    componentDidMount(){
        if(!cookies.get('usuario')){
            window.location.href="/";
        }
    }

    state={
        data:[],
        modalInsertar: false,
        form:{
            nombre: '',
            funcion: '',
            correo: '',
            contraseña: ''
        }
    }

    
    peticionGet=()=>{
        axios.get(url).then(response=>{
            console.log(response.data);
            this.setState({data:response.data});
        }).catch(error=>{
            console.log(error.message);        
            })    
        
    }

    peticionPost=async()=>{
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
           
        }).catch(error=>{
            console.log(error.message);        
            })
    }

    modalInsertar=()=>{
        this.setState({modalInsertar:!this.state.modalInsertar})

    }



    seleccionarUsuario=(usuario)=>{
        this.setState({
            form:{
                nombre: usuario.nombre,
                funcion: usuario.funcion,
                identificacion: usuario.identificacion,
                correo: usuario.correo

            }
        })
    }

    peticionDelete=()=>{
        axios.delete(url+this.state.form.usuario).then(response=>{
            
            this.peticionGet()
            
        })
    }

        componentDidMount() {
            this.peticionGet();

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
        console.log('nombre:' + cookies.get('nombre'));
        console.log('usuario:' + cookies.get('usuario'));
        console.log('correo:' + cookies.get('correo'));
        console.log('funcion:' + cookies.get('funcion'));

    return (
        
        <><><body>
            <div className="wrapper">
                <div className="section">
                    <div className="top_navbar">
                        <div>
                            <h1 classNameName="admin">{cookies.get('funcion')}</h1>
                        </div>

                        <div>
                            <h2 classNameName="nom">{cookies.get('nombre')}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="black" /></svg></h2>
                        </div>

                    </div>

                    <div className="top_navbar">

                        <div className="header-right-search">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--header-search-font-color)"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            <input type="text" placeholder="Buscar " id="search" className="search-text" />
                        </div>

                        <button onClick={() => this.modalInsertar()} className="header-right-button">
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--header-button-font-color)" className="button-logo"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" /></svg>
                            <h2 classNameName="button-text">Añadir Cultivos</h2>
                        </button>
                    </div>


                    <div className="sidebar">

                        <div className="profile">
                            <img src={logo}  alt="profile_picture"/>

                        </div>

                        <ul>
                            <li>
                                <a href="/Panelusuarios" >
                                    <img src={usuarios} alt=""/>
                                    <span className="item">Usuario</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Panelpredios">
                                    <img src={predios} alt=""/>
                                    <span className="item">Predios</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Panelcultivos" className="active">
                                    <img src={cultivos} alt=""/>
                                    <span className="item">Cultivos</span>
                                </a>
                            </li>

                        </ul>
                        <div class="container-icon">
                                        <button onClick={() => this.cerrarSesion()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" class="icon-svg"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g></svg>
                                        </button>
                                    </div>
                    </div>
                    

                    <div className="table-responsive">
                        <table className="responsive-table  table-bordered ">
                            <thead>
                                <tr>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Tiempo</th>
                                    <th scope="col">Recoleccion</th>
                                    <th scope="col">Prox. Siembra</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Controles</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map(cultivo =>{
                                   return(
                                <tr>
                                    <td>{cultivo.tipo}</td>
                                    <td>{cultivo.tiempo}</td>
                                    <td>{cultivo.recoleccion}</td>
                                    <td>{cultivo.prox_siembra}</td>
                                    <td>{cultivo.producto}</td>
                                    <td><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.559937" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#DDDCDF" />
                                        <path d="M11.8099 25C11.8099 26.1 12.7099 27 13.8099 27H21.8099C22.9099 27 23.8099 26.1 23.8099 25V13H11.8099V25ZM24.8099 10H21.3099L20.3099 9H15.3099L14.3099 10H10.8099V12H24.8099V10Z" fill="#4D4D4D" />
                                    </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                            <rect x="1.05994" y="0.75" width="34.5" height="34.5" rx="3.5" fill="#F2F1F6" stroke="#DDDCDF" />
                                            <path d="M9.30994 23.2501V27.0001H13.0599L24.1199 15.9401L20.3699 12.1901L9.30994 23.2501ZM27.0199 13.0401C27.4099 12.6501 27.4099 12.0201 27.0199 11.6301L24.6799 9.29006C24.2899 8.90006 23.6599 8.90006 23.2699 9.29006L21.4399 11.1201L25.1899 14.8701L27.0199 13.0401Z" fill="#4D4D4D" />
                                        </svg>
                                    </td>
                                </tr>
                                )
                            })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        
        </body>

        <Modal is isOpen={this.state.modalInsertar}>
                <form action="" method="" id="frm-test" autocomplete="off" enctype="multipart/form-data">
                    <div className="frow frow-1">
                        <div className="fitem fitem1-6">
                            <input type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form.nombre} required />
                            <label for="nombre">Nombre </label>
                        </div>
                        <div className="fitem fitem1-2">
                            <input type="text" id="funcion" name="funcion" onChange={this.handleChange} value={form.funcion} required />
                            <label for="funcion">Funcion</label>
                        </div>
                        <div className="fitem fitem1-3">
                            <input type="email" id="correo" name="correo" onChange={this.handleChange} value={form.correo} required />
                            <label for="correo">Correo</label>
                        </div>

                    </div>
                    <div className="frow frow-1">
                        <div className="fitem fitem1-1">
                            <input type="password" id="password" name="password" onChange={this.handleChange} value={form.password} required />
                            <label for="password">Contraseña</label>
                        </div>


                    </div>

                    <div classNameName="frow frow-4">
                        <div classNameName="fdiv fdiv-2">
                            <button type="submit" onClick={() => this.peticionPost()} classNameName="">Guardar</button>
                            <a onClick={() => this.modalInsertar()} href="" classNameName="btn btn-green">
                                <h2>Cancelar</h2>
                            </a>
                        </div>
                    </div>
                </form>

            </Modal></></>

    );

    }

}
export default Panelcultivos;