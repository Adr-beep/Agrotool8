
import '../static/css/Registro.css';
import '../static/css/Default.css';
import logo from './img/logo.svg';


function Registro() {
  return (
    <body>
    <div className="form-section">
        <div className="form-container">
            <div className="form-content">
                <div className="form-logo">
                <img src={logo} alt="" className="header-left-logo"/>    
                </div>
                <div className="form-inputs">
                    <form className="form-login" action="prueba.php" method="post">
                        <div className="login-item i-nombre">
                            <input type="text" name="usuario" defaultvalue="" id="usuario" required/>
                            <label for="usuario">Ingrese su nombre</label>
                        </div>
                        <div className="login-item i-lastname">
                            <input name="lastname" defaultvalue="" id="lastname" required/>
                            <label for="lastname">Ingrese su apellido</label>
                        </div>
                        <div className="login-item i-email">
                            <input name="email" defaultvalue="" id="email" required/>
                            <label for="email">Ingrese su correo institucional</label>
                        </div>
                        <div className="login-item i-password">
                            <input type="password" name="password" defaultvalue="" id="password" required/>
                            <label for="password">Cree una contraseña</label>
                        </div>
                        <div className="login-item i-login">
                            <button className="button-1" type="submit" name="">Registrar</button>
                        </div>
                        <div className="login-text">
                            <a href="/" className="text-policy">¿Ya tienes una cuenta?
                            </a>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>

</body>

  );
}

export default Registro;