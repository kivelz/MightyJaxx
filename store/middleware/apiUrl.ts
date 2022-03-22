import axios from 'axios';
import {GET_DATA_FROM_UNSPLASH, GET_DATA_FROM_UNSPLASH_SUCCESS, GET_DATA_FROM_UNSPLASH_FAILED} from '../../redux/action';

const apiActionCreator = (url) => (dispatch) => {
        dispatch(GET_DATA_FROM_UNSPLASH());
        return new Promise(() => {
            axios
            .get(url)
            .then((response) => {
                dispatch(GET_DATA_FROM_UNSPLASH_SUCCESS(response.data));
            })
            .catch((error) => {
                dispatch(GET_DATA_FROM_UNSPLASH_FAILED(error));
                console.log(error);
            });
        });
};

export default apiActionCreator;