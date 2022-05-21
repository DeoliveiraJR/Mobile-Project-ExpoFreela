// =======================================----------PAGE [ALBUM]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../Components/MusicCard';

class Album extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[ALBUM] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleFunctionDefault = this.handleFunctionDefault.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      artworkUrl100: '',
      artistName: '',
      collectionName: '',
      collectionSongs: [],
      favoritedList: [],
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  async componentDidMount() {
    console.log('[ALBUM] - 3.ComponentDidMount');
    console.log('------------');

    // =====chama function Default para consumir API=====
    await this.handleFunctionDefault();

    this.setState({
      loading: true,
    }, async () => {
      const favoritedList = await getFavoriteSongs();

      this.setState({
        loading: false,
        favoritedList,
      });
    });
  }

  // =============================================================
  // ==========--------BLOCO Handlers Functions---------==========
  // =============================================================
  // =====--FUNCTION Default--=====
  // describe function: Sintaxe para consumir uma API no componentDidMount:
  async handleFunctionDefault() {
    console.log('handleFunctionDefault1');
    console.log('---------------');

    const { match } = this.props;
    const idCollection = match.params.id;
    const collectionSongs = await getMusics(idCollection);
    const { artistName, collectionName, artworkUrl100 } = collectionSongs[0];

    this.setState({
      artworkUrl100,
      artistName,
      collectionName,
      collectionSongs,
    });
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[ALBUM] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { artworkUrl100,
      artistName,
      collectionName,
      collectionSongs,
      loading,
      favoritedList,
    } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="page-album">
        <Header />

        { /* componente 1 - image / artistName / artistAlbum */ }
        <div>
          <img src={ artworkUrl100 } alt={ artistName } />
          <h4 data-testid="artist-name">{ `artista/banda: ${artistName}` }</h4>
          <p data-testid="album-name">{ `Album: ${collectionName}` }</p>
        </div>

        { /* componente 2 - listSongs */ }
        {collectionSongs.map((track, index) => (
          <div key={ index }>
            <MusicCard
              track={ track }
              favoritedList={ favoritedList }
              handleUpdate={ () => {} }
            />
          </div>
        )).slice(1)}
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};

export default Album;

// =======================================-----------REFERENCIAS---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
// 1. método slice para nao utilizar o primeiro elemento do array quando iteramos com o map:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
