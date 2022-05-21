// =======================================----------PAGE [SEARCH]---------================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import Header from '../Components/Header';
import FormSearch from '../Components/FormSearch';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../Components/Loading';
import CardAlbumSearch from '../Components/CardAlbumSearch';

class Search extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[SEARCH] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      inputName: '',
      btnDisabled: true,
      loading: false,
      albums: '',
      artistSearched: '',
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[SEARCH] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION-[onChange]------=====
  // describe function: evento onChange >> altera o state 'inputName' armazenando o nome digitado na pesquisa e habilita/desabilita btn 'pesquisar'
  handleOnChange(event) {
    console.log('handleOnChange [Part-1]');
    console.log('----------------');

    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, () => {
      this.validateInfos();
    });
  }

  // =====-----FUNCTION-[OnClick]-----=====
  // describe function: evento Onclick, sintaxe para consumir uma API que renderiza os albuns:
  async handleClickSearch(newState) {
    console.log('handleClickSearch');
    console.log('-----------------');
    // const { loading } = this.state;
    const artist = newState.inputName;

    // 1. Altera o state primeira vez - limpa o input / status Loading: ON / armazena o artista pesquisado:
    this.setState({
      inputName: '',
      loading: true,
      artistSearched: artist,
    }, async () => {
      const albumAPI = await searchAlbumsAPI(artist);
      // console.log(albumAPI);

      // 2. altera o state segunda vez - status Loading: OFF / armazena o album de retorno da API:
      this.setState({
        loading: false,
        albums: albumAPI,
      });
    });
  }

  // =====---------FUNCTION---------=====
  // describe function: valida condições necessárias para habilitar/desabilitar btn 'pesquisar':
  validateInfos() {
    console.log('validateInfos [Part-1]');
    console.log('---------------');

    // Recupera os valores da State e destructuring:
    const { inputName } = this.state;

    // Bloco de variaveis que serão utilizadas como comparativo para as condicionais, declaração conforme lint:
    const vlrMin = 1; // valor minimo para habilitar 'btn search'

    // Bloco da lógica condicional:
    if (inputName.length > vlrMin) {
      this.setState({ btnDisabled: false }); // caso verdadeiro habilita o 'btn-save'
    } else {
      this.setState({ btnDisabled: true }); // caso false desabilita o 'btn-save'
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[SEARCH] - Render');
    console.log('---------------');

    // ====Desctructing Objects=====
    const { artistSearched, inputName, btnDisabled, loading, albums } = this.state;
    // console.log(albums);

    return (
      <div data-testid="page-search">
        <Header />
        { loading ? (
          <Loading />
        ) : (
          <FormSearch
            inputNameSearch={ inputName }
            isButtonDisabled={ btnDisabled }
            onInputChange={ this.handleOnChange }
            onSearchButtonClick={ () => this.handleClickSearch(this.state) }
          />
        )}
        <div>
          <h3>
            {`Resultado de álbuns de: ${artistSearched}`}
          </h3>
        </div>
        <section>
          {albums.length >= 1 ? (
            albums.map((album, index) => (
              <div key={ index }>
                <CardAlbumSearch
                  index={ index }
                  collectionId={ album.collectionId }
                  collectionName={ album.collectionName }
                />
              </div>
            ))
          )
            : (
              <h3> Nenhum álbum foi encontrado </h3>
            )}
        </section>
      </div>
    );
  }
}

export default Search;
