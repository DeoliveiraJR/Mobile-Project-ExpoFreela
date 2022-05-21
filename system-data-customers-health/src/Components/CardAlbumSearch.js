// ==================================--------COMPONENT [CardAlbumSearch]---------=========================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardAlbumSearch extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================
  // 1- Constructor e Super;
  constructor() {
    console.log('[CARD-ALBUMS-SEARCH] - 1.Constructor');
    console.log('-----------');
    super();

    // 2- 'binding' functions:

    // 3- create State {Objeto} :
    // this.state = { state1: '' }
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[CARD-ALBUMS-SEARCH] - 3.ComponentDidMount');
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
    console.log('[CARD-ALBUMS-SEARCH] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { index, collectionId, collectionName } = this.props;

    return (
      <div key={ index }>
        <Link
          to={ `/album/${collectionId}` }
          key={ collectionId }
          data-testid={ `link-to-album-${collectionId}` }
        >
          {`${collectionName}`}
        </Link>
      </div>
    );
  }
}

CardAlbumSearch.propTypes = {
  index: propTypes.number.isRequired,
  collectionId: propTypes.number.isRequired,
  collectionName: propTypes.string.isRequired,
};

export default CardAlbumSearch;
