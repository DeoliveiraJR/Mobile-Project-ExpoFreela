// =======================================----------PAGE [LOGIN]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import './Login.css';
import PropTypes from 'prop-types';
import BtnLogin from '../Components/BtnLogin';
import Loading from '../Components/Loading';
// import LogoTrybeTunes from '../Imagens/LogoTrybeTunes.png';

class Login extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[LOGIN] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' nas funções:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleValidateBtnDisable = this.handleValidateBtnDisable.bind(this);

    // 3- create State inicial {Objeto} :
    this.state = {
      username: '',
      password: '',
      statusBtn: true,
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[LOGIN] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: função que recebe o evento onChange no input e armazena/altera o state:
  handleOnChange(event) {
    console.log('handleOnchange');
    console.log('---------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    }, () => {
      this.handleValidateBtnDisable();
    });
  }

  // ====----FUNCTION 2----====
  // describe function: função que recebe o evento onClick do btn-Login, usa o fetch para consumir API e altera o state:
  handleClick(userLogin) {
    console.log('handleClick [Part-1]');
    console.log('--------------');

    // 1. altera o state loading primeiro e executa a api
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name: userLogin });

      console.log('handleClick [Part-2]');
      console.log('--------------');

      // 2. retorna o state loading para 'false'
      this.setState({
        loading: false,
      });

      console.log('handleClick [Part-3]');
      console.log('-------------');

      // 3. redireciona para a pagina de pesquisa;
      const { history } = this.props;
      history.push('/search');
    });
  }

  // ====----FUNCTION 3----====
  // describe function: função que valida condição para disable do btn-Login e altera state caso necessario:
  handleValidateBtnDisable() {
    console.log('handleBtnDisable');
    console.log('------------');

    const { username, password } = this.state;
    const minLenght = 3;

    if (
      username.length >= minLenght
      && password.length >= minLenght
      ) {
      this.setState({ statusBtn: false });
    } else {
      this.setState({ statusBtn: true });
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[LOGIN] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { username, statusBtn, loading } = this.state;

    return (
      <div data-testid="page-login" className="container-login">
        { loading ? (
          <Loading />
        ) : (
          <div>
            <img src="" alt="Logo" className="logoTunes" />
            <form className="form-control form-container">

              {/* componente 1 - input username */}
              <div>
                <label htmlFor="username">
                  Login/email:
                  <input
                    className="has-feedback form-control input-name"
                    type="text"
                    name="username"
                    data-testid="login-name-input"
                    placeholder="digite seu email"
                    onChange={ this.handleOnChange }
                  />
                </label>
             </div>

              {/* componente 2 - input password */}
              <div>
                <label htmlFor="password">
                  Senha:
                  <input
                    className="has-feedback form-control input-name"
                    type="password"
                    name="password"
                    placeholder="digite sua senha"
                    onChange={ this.handleOnChange }
                  />
                </label>
              </div>

               {/* Component 4 - Link - Criar Perfil */}
               <Link
                to="/CreateProfile"
              >
                <span>
                  Cadastrar Perfil
                </span>
              </Link>

              {/* componente 4 - btn Login */}
              <BtnLogin
                statusBtn={ statusBtn }
                onClickButton={ () => this.handleClick(username) }
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default Login;
