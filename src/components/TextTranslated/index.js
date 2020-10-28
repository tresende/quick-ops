import PropTypes from 'prop-types';
import { getTranslate } from '../../services/Util';

const TextTranslated = ({ code }) => getTranslate(code) || code;

TextTranslated.propTypes = {
    code: PropTypes.string.isRequired,
};

export default TextTranslated;
