// ==================================----------COMPONENT [Loading]-----------=============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import '../App.css';

class Loading extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[LOADING] - 1.Constructor');
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
    console.log('[LOADING] - 3.ComponentDidMount');
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
    console.log('[LOADING]- Render');
    console.log('---------------');

    return (
      <div className="loading">
        <h1>Carregando...</h1>
      </div>
    );
  }
}

export default Loading;
