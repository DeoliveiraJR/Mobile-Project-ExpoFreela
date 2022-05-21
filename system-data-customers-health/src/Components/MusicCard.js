// ==================================---------COMPONENT [MusicCard]---------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import propTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[MUSIC-CARD] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      loading: false,
      isChecked: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[MUSIC-CARD] - 3.ComponentDidMount');
    console.log('------------');

    // 1. recupera a track e a favoritedList armazenadas nas props;
    const { favoritedList, track } = this.props;

    // 2. checa se a track current está contida na listagem de favoritos:
    const checkFav = favoritedList.some((favSong) => favSong.trackId === track.trackId);

    // 3. altera o state 'isChecked' e armazena a lista de favoritos no state:
    this.setState({
      isChecked: checkFav,
    });
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----===='
  // describe function: change 'checked' state and add FavoriteSong:
  async handleOnChange(track) {
    console.log('handleOnChange [Part-1]');
    console.log('---------------');
    const { isChecked } = this.state;
    const { handleUpdate } = this.props;

    // ====----REGRA DE NEGÓCIO----=====
    // ------------------------------------
    // 1. se state 'isChecked' change for false, roda a função addSong:
    if (isChecked === false) {
      this.setState({
        loading: true,
        isChecked: !isChecked,
      }, async () => {
        await addSong(track);

        this.setState({
          loading: false,
        });
      });

    // 2. caso contrário roda a função removeSong:
    } else {
      this.setState({
        loading: true,
        isChecked: !isChecked,
      }, async () => {
        await removeSong(track);
        handleUpdate();

        this.setState({
          loading: false,
        });
      });
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[MUSIC-CARD] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { track } = this.props;
    const { loading, isChecked } = this.state;

    if (loading) return <Loading />;

    return (
      <>
        <span>{ track.trackName }</span>

        {/* componente 1 = type: <audio> */}
        <div>
          <audio
            data-testid="audio-component"
            src={ track.previewUrl }
            controls
          >
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>

        {/* componente 2 = type: checkbox  */}
        <div>
          <label htmlFor="checkboxFavorite">
            Favorita
            <input
              name="checkboxFavorite"
              id="checkboxFavorite"
              data-testid={ `checkbox-music-${track.trackId}` }
              type="checkbox"
              checked={ isChecked }
              onChange={ () => this.handleOnChange(track) }
            />
          </label>
        </div>

      </>
    );
  }
}

MusicCard.propTypes = {
  track: propTypes.oneOfType([
    propTypes.object,
  ]).isRequired,
  favoritedList: propTypes.arrayOf(propTypes.object).isRequired,
  handleUpdate: propTypes.func.isRequired,
};

export default MusicCard;
