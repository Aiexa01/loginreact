import './login-photo.css'
import './login-text-button.css'
import './formulario.css'
export const Formulario = () => {
  return <div className='formulario'>
    <LoginPhoto></LoginPhoto>
    <LoginTextButton></LoginTextButton>
  </div>
}
const LoginPhoto = () => {
  return <div className="login-photo">
    <div className="login-text">
      <span>Login</span>
      <span className="login-text-h3">Please select your acount</span>
    </div>
    <div className="login-photo-button">
      <div className="login-photo2 centrar">
        <img src="/public/assets/imagenes/photo1.svg" />
        <span>Welcome back, <b>Hamid</b></span>
      </div>
      <div className="remove">
        <a href="login2.html">Remove</a>
      </div>
    </div>
  </div>
}

const LoginTextButton = () => {
  return <div className="login-text-button">
    <div className="link-button">
      <a href="login2.html">Login to a different account</a>
      <button><span>Login</span> <img src="/public/iconos/flechaderecha.svg" /></button>
    </div>
    <div className="text-button">
      <span>Don't haven an account?</span>
      <span className="sign-up">Sign up</span>
    </div>
  </div>
}