import * as types from '../actions/actionTypes'

export default function(state = {foo:'bar'}, payload) {
  switch(payload.type){
    case types.LOAD_LOCALE_SUCCESS:
      return payload.locale
    case types.CHANGE_LOCALE_SUCCESS:
      return payload.locale
    default:
      return state;
  }
}
