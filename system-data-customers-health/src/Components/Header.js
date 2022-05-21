// ==================================----------COMPONENT [Header]-----------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import './Header.css';
// import LogoHeader from '../Imagens/LogoHeader.png';
// import IconUser from '../Imagens/IconUser.png';

class Header extends React.Component {
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[HEADER] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' nas funções:
    this.handleFetchGetUser = this.handleFetchGetUser.bind(this);

    // 3- create State inicial {Objeto} :
    this.state = {
      user: '',
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[HEADER] - 3.ComponentDidMount');
    console.log('------------');
    this.handleFetchGetUser();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----====
  // describe function:
  async handleFetchGetUser() {
    console.log('handleFetchGetUser [Part-1]');
    console.log('---------------');

    // 1. altera o state loading para '...carregando':
    this.setState({
      loading: true,
    }, async () => {
      console.log('handleFetchGetUser [Part-2]');
      console.log('-------------');

      // 2. executa a fetch
      const userName = await getUser();
      // console.log(user.name);

      // 3. depois retorna o state loading para 'false'
      this.setState({
        user: userName.name,
        loading: false,
      });
    });
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[HEADER] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    const { user, loading } = this.state;

    return (
      <div className="container-header">
        { loading ? (
          <Loading />
        ) : (
          <header data-testid="header-component" className="container-header">
            <img src="" alt="" className="img-header" />
            <h2 className="welcome-text">Welcome to TrybeTunes!!!</h2>
            <div className="container-user">
              <img src="" alt="logo" className="icon-user" />
              <p
                data-testid="header-user-name"
                className="userName"
              >
                { user }
              </p>
            </div>

            {/* SEARCH */}
            <nav className="container-nav">
              <Link
                data-testid="link-to-search"
                to="/search"
              >
                <span className="box-link-search link-search">
                  Search
                </span>
              </Link>

              {/* FAVORITES */}
              <Link
                data-testid="link-to-favorites"
                to="/favorites"
              >
                <span className="box-link-favorites link-favorites">
                  Favorites
                </span>
              </Link>

              {/* PROFILE */}
              <Link
                data-testid="link-to-profile"
                to="/profile"
              >
                <span className="box-link-profile link-profile">
                  Profile
                </span>
              </Link>
            </nav>

          </header>
        )}
      </div>
    );
  }
}

export default Header;

// {/* HOME */}
// <div className="box-link-home">
//  <Link
//  data-testid="link-to-home"
//  to="/"
// >
//  Home
// </Link>
// </div>
