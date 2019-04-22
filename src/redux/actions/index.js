import { DS_DATA_REQUESTED, DS_DATA_LOADED, EP_DATA_REQUESTED, EP_DATA_LOADED, DS, EP } from '../constants/actionTypes'

export function getData(from) {
  if(from === DS)
  return {type: DS_DATA_REQUESTED}
  if(from === EP)
  return {type: EP_DATA_REQUESTED}
}

export function dataLoaded(payload, from) {
  if(from === DS)
  return { type: DS_DATA_LOADED, payload }
  if(from === EP)
  return { type: EP_DATA_LOADED, payload }
}