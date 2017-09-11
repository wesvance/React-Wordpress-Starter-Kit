import * as constants from './actionTypes';
import * as ui from './uiActions';

import Axios from '../config/axios';

export function successRequestingCategories(response){
  return { type: constants.ADD_CATEGORIES, categories: response.data.response};
}

export function requestAllCategories(){
  return function(dispatch){
    dispatch(ui.loadingChanged(true));
    let requestUrl = '/api/categories';
    return Axios.get(requestUrl).then(
      response => dispatch(successRequestingCategories(response))
    ).then(response => dispatch(ui.loadingChanged(false))
    ).catch(e => {
        dispatch(ui.displayError(e.response.data.response.detail))
        dispatch(ui.loadingChanged(false))
      }
    )
  }
}