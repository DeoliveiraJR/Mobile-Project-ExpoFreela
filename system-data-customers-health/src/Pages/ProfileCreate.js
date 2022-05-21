// ====================================----------PAGE [CreateProfile]-----------==========================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Components/Loading';
import { getUser, createUser, updateUser } from '../services/userAPI';
import FormCreateProfile from '../Components/FormCreateProfile';

class CreateProfile extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[PROFILE-EDIT] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.validateInfos = this.validateInfos.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      loading: false,
      name: '',
      email: '',
      password: '',
      isSaveButtonDisabled: true,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[PROFILE-CREATE] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  
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

    const user = await getUser();
    console.log(user);

    const { name, email, password } = currentState;

    // 1. altera o state loading para true e executa api:
    this.setState({
      loading: true,
    }, async () => {
      await createUser({ name, email, password });
      console.log('handleOnClick [Part-2]');
      console.log('-------------');
      
      // 2. retorna loading para false:
      this.setState({
        loading: false,
      });
      // 3. redireciona para pagina profile:
      const { history } = this.props;
      await updateUser({ name, email, password });
      history.push('/profile');
    });
  }

  // ====----FUNCTION 3----====
  // Describe function: Valida todas condições que habilitam/desabilitam o 'btn-save':
  validateInfos() {
    console.log('validateInfos');
    console.log('---------------');
    const { name, email, password } = this.state;

    // const regexEmail = /[a-z0-9]@test.com/;

    // Bloco da lógica condicional:
    if (
      name.length > 0
      && email.length > 0
      && password.length > 0
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
    console.log('[PROFILE-CREATE] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const {
      name,
      email,
      password,
      loading,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div data-testid="page-profile-edit">
        { loading ? <Loading /> : (
         <>
          <h2>
            Create your Profile
          </h2>
          <FormCreateProfile
            nameProps={name}
            emailProps={email}
            passwordProps={password}
            loadingProps={loading}
            isSaveButtonDisabled={isSaveButtonDisabled}
            inputOnChange={this.handleOnChange}
            btnOnClick={() => this.handleOnClick(this.state)} />
          </>
        )}
      </div>
    );
  }
}

CreateProfile.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default CreateProfile;
