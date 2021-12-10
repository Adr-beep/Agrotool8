import '../static/css/CrearPredios.css';
import '../static/css/Default.css';
import logo from './img/logo.svg';


function Crearpredios(){
    return(

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
                        <h1 className="admin">Administrador</h1>
                    </div>
                    
                    <div >
                        <h2 className="nom">Maria Lourdes Sierra  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="black"/></svg></h2>
                    </div>
                </div>
            </div>
        </header>
        <header className="header">
            
            <div className="header-left"/>
                
            
            <div className="header-right">
               
                <div className="header-right-content">
                    
                    <div className="header-right-search">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--header-search-font-color)"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        <input type="text" placeholder="Buscar " id="search" className="search-text"/>
                    </div>
                    
                    <a href="/newUser" className="header-right-button">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--header-button-font-color)" className="button-logo"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
                        <h2 className="button-text">Añadir Predio</h2>
                    </a>
                </div>
            </div>
        </header>

        
        <div className="content">
            
            <div className="content-left">
                <div className="left-content">
                    
                    <nav className="top-content">
                        
                        <a href="/Panelusuarios/" className="item item-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <rect width="30" height="30" rx="6" fill="#4D4D4D"/>
                                <path d="M13 15C15.2091 15 17 13.2091 17 11C17 8.79086 15.2091 7 13 7C10.7909 7 9 8.79086 9 11C9 13.2091 10.7909 15 13 15Z" fill="white"/>
                                <path d="M13.67 16.02C13.45 16.01 13.23 16 13 16C10.58 16 8.32 16.67 6.39 17.82C5.51 18.34 5 19.32 5 20.35V23H14.26C13.47 21.87 13 20.49 13 19C13 17.93 13.25 16.93 13.67 16.02Z" fill="white"/>
                                <path d="M23.7499 19C23.7499 18.78 23.7199 18.58 23.6899 18.37L24.8299 17.36L23.8299 15.63L22.3799 16.12C22.0599 15.85 21.6999 15.64 21.2999 15.49L20.9999 14H18.9999L18.6999 15.49C18.2999 15.64 17.9399 15.85 17.6199 16.12L16.1699 15.63L15.1699 17.36L16.3099 18.37C16.2799 18.58 16.2499 18.78 16.2499 19C16.2499 19.22 16.2799 19.42 16.3099 19.63L15.1699 20.64L16.1699 22.37L17.6199 21.88C17.9399 22.15 18.2999 22.36 18.6999 22.51L18.9999 24H20.9999L21.2999 22.51C21.6999 22.36 22.0599 22.15 22.3799 21.88L23.8299 22.37L24.8299 20.64L23.6899 19.63C23.7199 19.42 23.7499 19.22 23.7499 19ZM19.9999 21C18.8999 21 17.9999 20.1 17.9999 19C17.9999 17.9 18.8999 17 19.9999 17C21.0999 17 21.9999 17.9 21.9999 19C21.9999 20.1 21.0999 21 19.9999 21Z" fill="white"/>
                                </svg>
                            <h2>Usuarios</h2>
                        </a>
                        <a href="/productos" className="item item-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <rect width="30" height="30" rx="6" fill="#18AD5E"/>
                                <path d="M20 18H22V10C22 8.9 21.1 8 20 8H12V10H20V18ZM10 20V4H8V8H4V10H8V20C8 21.1 8.9 22 10 22H20V26H22V22H26V20H10Z" fill="white"/>
                                </svg>
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
                
                
                <div className="right-content">
                    <div>
                    <h2>Información  del Predio</h2>
                    </div>
                    <form action="/newUser" method="post" id="frm-test" autocomplete="off" enctype="multipart/form-data">
                        <div className="frow frow-1">
                            <div className="fitem fitem1-1-1">
                                <input type="text" name="username" id="username" required/>
                                <label for="username">Nombre del predio</label>
                            </div>
                            <div className="fitem fitem1-2-2">
                                <input type="text" id="funcion" name="funcion" required/>
                                <label for="funcion">Encargado del predio</label>
                            </div>
                            
    
                        </div>
                        <div className="frow frow-1">
                            <div className="fitem fitem1-6">
                                <input type="text" name="username" id="username" required/>
                                <label for="username">Area</label>
                            </div>
                            <div className="fitem fitem1-2">
                                <input type="text" id="funcion" name="funcion" required/>
                                <label for="funcion">Ubicación</label>
                            </div>
                            <div className="fitem fitem1-3">
                                <input type="correo" id="correo" name="correo" required/>
                                <label for="correo">Identificación</label>
                            </div>
    
                        </div>
                        
                        <div className="frow frow-4">
                            <div className="fdiv fdiv-2">
                                <button type="submit" className="dbutton dbutton-1">Guardar</button>
                                <a href="/usuarios/" className="dbutton dbutton-2">
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

export default Crearpredios;