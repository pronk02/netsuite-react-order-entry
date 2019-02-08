import * as ajax from './ajaxActions';
import * as actions from './actionTypes';

export const searchItemsSuccess = items => ({ type: actions.SEARCH_ITEMS_SUCCESS, items });
export const searchTextChanged = searchText => ({ type: actions.ITEM_SEARCH_TEXT_CHANGED, searchText });

export const searchItems = searchText =>
  ajax.dispatchAsync('searching for items', 'searchItems', searchItemsSuccess, searchText);
