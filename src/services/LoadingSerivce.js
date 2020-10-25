import { addLoadingItem, removeLoadingItem } from '../actions/loading';
import { generateUniqueId } from './Util';

const LoadingService = {
    addLoadingItem: () => (dispatch) => {
        const id = generateUniqueId();
        dispatch(addLoadingItem(id));
        return id;
    },

    removeLoadingItem: (id) => (dispatch) => dispatch(removeLoadingItem(id)),
};

export default LoadingService;
