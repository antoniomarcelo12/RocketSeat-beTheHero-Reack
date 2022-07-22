import './styles.css'

import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default () => {
    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className='back-link' to="/profile">
                        <AiOutlineArrowLeft /> Voltar para o home.
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />
                    <div className="buttons">
                        <Link className='button cancel' to="/profile">
                            <button>Cancelar</button>
                        </Link>
                        <Link className='button' to="/profile">
                            <button type="submit">Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}