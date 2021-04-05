import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL, showModal }) => {
  return (
    <li onClick={() => showModal(largeImageURL)} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={webformatURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  showModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
