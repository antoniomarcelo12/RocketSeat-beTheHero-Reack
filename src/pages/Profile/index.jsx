import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'

export default () => {
    return (
        <div className="profile-container">
            <header>
    
                <img src={logoImg} alt="Be the hero" />
                <span>Bem vinda, APAD</span>

                <Link className='button cadastro' to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                
                <Link to="/">
                    <button className='power'>
                        <FiPower size={18} color="#E02041" />
                    </button>
                </Link>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button' >
                        <FiTrash2 size={20} color='A8A8B3' /> 
                    </button>
                </li>
                
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button' >
                        <FiTrash2 size={20} color='A8A8B3' /> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button' >
                        <FiTrash2 size={20} color='A8A8B3' /> 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button' >
                        <FiTrash2 size={20} color='A8A8B3' /> 
                    </button>
                </li>

            </ul>
        </div>

    );
}