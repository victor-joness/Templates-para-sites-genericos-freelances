import Imagem from "../img/Screenshot_1.png"
import Register from "./Register"
import "../style/LoginSuccess.css"

function LoginSucess(){
    

    return (
        <section className="content">
            <div className="esquerda">
                <div className='infos'>
                    <h1>Seja Bem Vindo ✌️</h1>
                    <h2>Confira suas informações abaixo</h2>
                </div>
                <div className='form'>
                    <div className='nickname'>
                        <p>NickName: <span>{localStorage.getItem("MyNickNames")}</span></p>
                    </div>
                    <div className='email'>
                        <p>Email: <span>{localStorage.getItem("MyEmail")}</span></p>
                    </div>
                    <div className='btn'>
                        <a href="/" className='btn' >Logout</a>
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

export default LoginSucess;
