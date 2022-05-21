// ==================================----------COMPONENT [FormSearch]-----------==========================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';

class FormSearch extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[FORM-SEARCH] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:

    // 3- create State {Objeto} :
    // this.state = { };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[FORM-SEARCH] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----====
  // describe function:
  handleFunction() {
    console.log('handleFunction [Part-1]');
    console.log('---------------');
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[FORM-SEARCH]- Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { inputNameSearch,
      isButtonDisabled,
      onInputChange,
      onSearchButtonClick,
    } = this.props;

    return (
      <div>
        { /* componente - Form */ }
        <form>

          { /* componente 1 - Input type Name */ }
          <label htmlFor="inputName">
            Musica/Banda:
            <input
              name="inputName"
              data-testid="search-artist-input"
              type="text"
              placeholder="digite sua busca"
              value={ inputNameSearch }
              onChange={ onInputChange } /* campo para função onChange */
            />
          </label>

          { /* componente 2 - Input type Button */ }
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isButtonDisabled } /* habilita/desabilita button */
            onClick={ onSearchButtonClick } /* prop para função onClick */
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

FormSearch.propTypes = {
  inputNameSearch: propTypes.string.isRequired,
  isButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSearchButtonClick: propTypes.func.isRequired,
};

export default FormSearch;
