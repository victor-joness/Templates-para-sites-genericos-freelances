import React from "react";
import { useState} from "react";
import ReactDOM from "react-dom";
import AppRoutes from "../AppRoutes";
import Imagem from "../img/Screenshot_1.png"

/* import logo from './logo.svg'; */
import "../style/index.css";
import '../style/login.css';
import LoginSuccess from "./LoginSuccess";

function Login() {
  const [email, setEmail2] = useState("");
  const [senha, setSenha2] = useState("");

  const onChangeemail2 = (event: any) => {
    setEmail2(event.target.value);
  }

  const onChangesenha2 = (event: any) => {
    setSenha2(event.target.value);
  }

  const Onclick = () => {
    console.log("teste")

      if(localStorage.getItem("MyEmail") === email){
          if(localStorage.getItem("MyPassword") === senha){
            ReactDOM.render(
              <React.StrictMode>
                <LoginSuccess/>
              </React.StrictMode>,
              document.getElementById('root')
            );
          }else{
            window.alert("senha errada")
          }
      }else{
        window.alert("email errado")
      }
  }


  return (
    <section className="content">
      <div className="esquerda">
        <div className='infos'>
          <h1>Login ✌️</h1>
          <h2>How do i get started lorem ipsum dolor at?</h2>
          <div className='social'>
            <a href="#">Sing in Google</a>
            <a href="#">Sing in Facebook</a>
          </div>
        </div>
  
        <div className='separator'>
          <span></span>
          <p>or sign in with email</p>
          <span></span>
        </div>
  
        <div className='form'>
          <div className='email'>
            <p>Email</p>
            <input type="email" placeholder='You email' value={email} onChange={onChangeemail2}/>
          </div>
          <div className='password'>
            <p>Password</p>
            <input type="password" placeholder='enter you password' value={senha} onChange={onChangesenha2}/>
          </div>
          <div className='forget'>
            <div className="register">
              <a href="/register">Registra-se</a>
            </div>
            <div className="esqueceu">
              <a href="#">Esqueceu a senha?</a>
            </div>
          </div>
          <div className='btn'>
            <a className='btn' type="submit" onClick={Onclick}>Login</a>
          </div>
          <div className='credit'>
            <p>Credit by <span>Victor Mesquita</span> | 2022</p>
          </div>
        </div>
      </div>
  
      <div className='direita'>
        <div className='image'>
          <img src={Imagem} alt="" />
        </div>
      </div>
  
    </section>
  );
}

export default Login;