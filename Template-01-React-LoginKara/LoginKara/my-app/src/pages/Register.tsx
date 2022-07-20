import { useState } from "react";
import Imagem from "../img/Screenshot_1.png";
import "../style/Register.css"

const listadeusuario: (string | null)[][] = [];

function Register(){

  const [NickName , setNickName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  let MyNickNamesArray: (string | null)[] = [];

  const onChangeNickName = (event: any) => {
    localStorage.setItem("MyNickNames", event.target.value);
    localStorage.setItem("MyEmail", event.target.value)
    setNickName(event.target.value);
  }

  const onChangeEmail = (event: any) => {
    localStorage.setItem("MyEmail", event.target.value)
    setEmail(event.target.value);
  }

  const onChangePassword = (event: any) => {
    localStorage.setItem("MyPassword", event.target.value)
    setPassword(event.target.value);
  }
  
  const onLogin = () => {
    MyNickNamesArray.push(localStorage.getItem("MyNickNames"))
    MyNickNamesArray.push(localStorage.getItem("MyEmail"))
    MyNickNamesArray.push(localStorage.getItem("MyPassword"))
    listadeusuario.push(MyNickNamesArray)
    localStorage.setItem("listadeusuario", listadeusuario.toString())
  }

  return (
    <section className="content">
      <div className="esquerda">
        <div className='infos'>
          <h1>Registra-se</h1>
          <h2>Preencha os campos abaixo e faça o login</h2>
        </div>
        <div className='form'>
          <div className='nickname'>
            <p>NickName</p>
            <input type="text" placeholder='NickName' value={NickName} onChange={onChangeNickName}/>
          </div>
          <div className='email'>
            <p>Email</p>
            <input type="email" placeholder='You email' value={Email} onChange={onChangeEmail}/>
          </div>
          <div className='password'>
            <p>Password</p>
            <input type="password" placeholder='enter you password' value={Password} onChange={onChangePassword}/>
          </div>
          <div className='btn'>
            <a href="/success" className='btn' onClick={onLogin}>Login</a>
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
    )
}

export default Register;