// ===================================---------COMPONENT [FormEditProfile]---------=======================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';
import Loading from './Loading';

class FormEditProfile extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[FORM-CREATE-PROFILE] - 1.Constructor');
    console.log('-----------');
    super();

    // 2- 'binding' functions:
    // this.handleFunctionDefault = this.handleFunctionDefault.bind(this);

    // 3- create State {Objeto} :
    // this.state = { };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[FORM-CREATE-PROFILE] - 3.ComponentDidMount');
    console.log('------------');

    // =====chama function Default para consumir API=====
    // this.handleFunctionDefault();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====--FUNCTION Default--=====
  // describe function: Sintaxe para consumir uma API e alterar o state inicial:
  async handleFunctionDefault() {
    console.log('handleFunctionDefault [Part-1]');
    console.log('----------------');
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[FORM-EDIT-PROFILE] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const {
      loadingProps,
      // nameProps,
      // emailProps,
      // passwordProps,
      inputOnChange,
      isSaveButtonDisabled,
      btnOnClick,

    } = this.props;

    if (loadingProps) return <Loading />;
    return (
      <div>

        { /* componente - Form */ }
        <form>

          { /* componente 1: NAME - Input type: Text */ }
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="digite seu nome aqui"
              // value={ nameProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 2: EMAIL - Input type: Email */ }
          <label htmlFor="email">
            email
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email here"
              // value={ emailProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 3: DESCRIPTON - Input type: password */ }
          <label htmlFor="password">
            Criar Senha:
            <input
              id="password"
              name="password"
              type="text"
              placeholder="digite sua senha"
              // value={ passwordProps }
              onChange={ inputOnChange }
            />
          </label>

          
          { /* componente 5: BUTTON - Input type: Btn */ }
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ btnOnClick }
          >
            Criar usuario
          </button>
        </form>
      </div>
    );
  }
}

FormEditProfile.propTypes = {
  nameProps: propTypes.string.isRequired,
  emailProps: propTypes.string.isRequired,
  passwordProps: propTypes.string.isRequired,
  loadingProps: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  inputOnChange: propTypes.func.isRequired,
  btnOnClick: propTypes.func.isRequired,
};

export default FormEditProfile;
