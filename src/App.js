import { Component } from 'react';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import Apiservice from '../src/services/Apiservice';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Loader from './Components/Loader';
import Modal from './Components/Modal';
import './styles/base.scss';
import './App.scss';

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    Apiservice.fetchImagesWithQuery(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState(state => ({
      showModal: !state.showModal,
      largeImageURL,
    }));
  };

  render() {
    const { showModal, images, isLoading, error, largeImageURL } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h2>Opps! Something went wrong!</h2>}

        {images.length > 0 && (
          <ImageGallery showModal={this.toggleModal} images={images} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
      </Container>
    );
  }
}
