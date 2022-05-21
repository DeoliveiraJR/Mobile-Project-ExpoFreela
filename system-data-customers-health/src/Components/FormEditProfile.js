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
    console.log('[FORM-EDIT-PROFILE] - 1.Constructor');
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
    console.log('[FORM-EDIT-PROFILE] - 3.ComponentDidMount');
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
      nameProps,
      emailProps,
      descriptionProps,
      imageProps,
      loadingProps,
      isSaveButtonDisabled,
      inputOnChange,
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
              data-testid="edit-input-name"
              type="text"
              placeholder="input name here"
              value={ nameProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 2: EMAIL - Input type: Email */ }
          <label htmlFor="email">
            email
            <input
              id="email"
              name="email"
              data-testid="edit-input-email"
              type="email"
              placeholder="email here"
              value={ emailProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 3: DESCRIPTON - Input type: TextArea */ }
          <label htmlFor="description">
            Description
            <input
              id="description"
              name="description"
              data-testid="edit-input-description"
              type="textArea"
              placeholder="description here"
              value={ descriptionProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 4: IMAGE - Input type: Image */ }
          <label htmlFor="image">
            Image Url
            <input
              id="image"
              name="image"
              data-testid="edit-input-image"
              type="text"
              placeholder="input url here"
              value={ imageProps }
              onChange={ inputOnChange }
            />
          </label>

          { /* componente 5: BUTTON - Input type: Btn */ }
          <button
            type="button"
            data-testid="edit-button-save"
            disabled={ isSaveButtonDisabled }
            onClick={ btnOnClick }
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

FormEditProfile.propTypes = {
  nameProps: propTypes.string.isRequired,
  emailProps: propTypes.string.isRequired,
  descriptionProps: propTypes.string.isRequired,
  imageProps: propTypes.string.isRequired,
  loadingProps: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  inputOnChange: propTypes.func.isRequired,
  btnOnClick: propTypes.func.isRequired,
};

export default FormEditProfile;
