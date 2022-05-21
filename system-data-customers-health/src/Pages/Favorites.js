// =======================================----------PAGE [FAVORITES]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../Components/MusicCard';

class Favorites extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[FAVORITES] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleUpdate = this.handleUpdate.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      favoritedList: [],
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[FAVORITES] - 3.ComponentDidMount');
    console.log('------------');

    this.handleUpdate();
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function:
  handleUpdate() {
    console.log('handleUpdate');
    console.log('---------------');

    this.setState({
      loading: true,
    }, async () => {
      const favoritedList = await getFavoriteSongs();
      // console.log(favoritedList);

      this.setState({
        loading: false,
        favoritedList,
      });
    });
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[FAVORITES] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { loading, favoritedList } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="page-favorites">
        <Header />

        { /* componente 1 - image / artistName / artistAlbum */ }
        {favoritedList.map((track, index) => (
          <div key={ index }>
            <img src={ track.artworkUrl100 } alt={ track.artistName } />
            <MusicCard
              track={ track }
              favoritedList={ favoritedList }
              handleUpdate={ this.handleUpdate }
            />
          </div>
        ))}
      </div>
    );
  }
}

Favorites.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default Favorites;
