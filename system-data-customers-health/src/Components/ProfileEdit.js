// ====================================---------COMPONENT [ProfileEdit]---------==========================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';
import FormEditProfile from './FormEditProfile';

class ProfileEdit extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[PROFILE-EDIT] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleFunctionDefault = this.handleFunctionDefault.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.validateInfos = this.validateInfos.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      loading: false,
      name: '',
      email: '',
      description: '',
      image: '',
      isSaveButtonDisabled: true,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[PROFILE-EDIT] - 3.ComponentDidMount');
    console.log('------------');

    // =====chama function Default para consumir API=====
    this.handleFunctionDefault();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====--FUNCTION Default--=====
  // describe function: Sintaxe para consumir uma API e alterar o state inicial:
  async handleFunctionDefault() {
    console.log('handleFunctionDefault [Part-1]');
    console.log('----------------');

    // 1. altera o state loading para '...carregando':
    this.setState({
      loading: true,
    }, async () => {
      console.log('handleFunctionDefault [Part-2]');
      console.log('-----------------');

      // 2. executa a fetch
      const user = await getUser();
      const { name, email, image, description } = user;

      // 3. depois retorna o state loading para 'false'
      this.setState({
        loading: false,
        name,
        email,
        description,
        image,
      });
    });
  }

  // ====----FUNCTION 1----====
  // Describe function: função que recebe o evento onChange no input e altera no State':
  handleOnChange(event) {
    console.log('handleOnChange [Part-1]');
    console.log('----------------');
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    }, () => {
      this.validateInfos();
    });
  }

  // ====----FUNCTION 2----====
  // Describe function: função que recebe o evento onClick no 'btn-save' altera no State':
  async handleOnClick(currentState) {
    console.log('handleOnClick [Part-1]');
    console.log('--------------');

    const { name, email, image, description } = currentState;

    // 1. altera o state loading para true e executa api:
    this.setState({
      loading: true,
    }, async () => {
      await updateUser({ name, email, image, description });

      console.log('handleOnClick [Part-2]');
      console.log('-------------');

      // 2. retorna loading para false:
      this.setState({
        loading: false,
      });
      // 3. redireciona para pagina profile:
      const { history } = this.props;
      history.push('/profile');
    });
  }

  // ====----FUNCTION 3----====
  // Describe function: Valida todas condições que habilitam/desabilitam o 'btn-save':
  validateInfos() {
    console.log('validateInfos');
    console.log('---------------');
    const { name, email, description, image } = this.state;

    // const regexEmail = /[a-z0-9]@test.com/;

    // Bloco da lógica condicional:
    if (
      name.length > 0
      && email.length > 0
      && description.length > 0
      && image.length > 0
      // && regexEmail.test(email) // REFERENCIAS
    ) {
      this.setState({ isSaveButtonDisabled: false }); // caso verdadeiro habilita o 'btn-save'
    } else {
      this.setState({ isSaveButtonDisabled: true }); // caso false desabilita o 'btn-save'
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[PROFILE-EDIT] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const {
      name,
      email,
      description,
      image,
      loading,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div data-testid="page-profile-edit">
        { loading ? <Loading /> : (
          <FormEditProfile
            nameProps={ name }
            emailProps={ email }
            descriptionProps={ description }
            imageProps={ image }
            loadingProps={ loading }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            inputOnChange={ this.handleOnChange }
            btnOnClick={ () => this.handleOnClick(this.state) }
          />

        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default ProfileEdit;
