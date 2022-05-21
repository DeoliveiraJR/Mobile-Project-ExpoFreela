// =======================================----------PAGE [PROFILE]---------===============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[PROFILE] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleFunctionDefault = this.handleFunctionDefault.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      user: '',
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[PROFILE] - 3.ComponentDidMount');
    console.log('------------');

    // =====chama function Default para consumir API=====
    this.handleFunctionDefault();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====--FUNCTION Default--=====
  // describe function: Sintaxe para consumir uma API
  async handleFunctionDefault() {
    console.log('handleFunctionDefault [Part-1]');
    console.log('---------------');

    // 1. altera o state loading para '...carregando':
    this.setState({
      loading: true,
    }, async () => {
      console.log('handleFunctionDefault [Part-2]');
      console.log('-------------');

      // 2. executa a fetch
      const user = await getUser();

      // 3. depois retorna o state loading para 'false'
      this.setState({
        user,
        loading: false,
      });
    });
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[PROFILE] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { user, loading } = this.state;
    // console.log(user);

    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? <Loading /> : (
          <div>
            <div>
              <img
                data-testid="profile-image"
                src={ user.image }
                alt="Foto-perfil"
              />
            </div>
            <div>
              <span>
                USERNAME
                <p>{ user.name }</p>
              </span>
              <span>
                EMAIL
                <p>{ user.email }</p>
              </span>
              <span>
                DESCRIPTION
                <p>{ user.description }</p>
              </span>
              <button type="button">
                <Link to="/profile/edit">Editar perfil</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
