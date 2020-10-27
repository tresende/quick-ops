import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const DEFAULT_DATA = {
    loadingReducer: {
        loadingStack: [],
    },
    timelineReducer: {
        timeline: [],
    },
};

const setup = (initialData) => {
    const data = {
        ...DEFAULT_DATA,
        ...initialData,
    };
    const middlewares = [thunkMiddleware];
    const mockStore = configureStore(middlewares);
    return mockStore(data);
};

export default setup;
