import axios from 'axios';
import PropTypes from 'prop-types';

const apiKey = '20214854-335f127fa955b7b4fdba968be';
const fetchImagesWithQuery = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(responce => responce.data.hits);
};

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default { fetchImagesWithQuery };
