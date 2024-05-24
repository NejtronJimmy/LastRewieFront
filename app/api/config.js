export const BASE_URL = 'http://localhost:3001/api'

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/auth/login`,
  me: `${BASE_URL}/me`,
}


const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj)
  
  str = str.replaceAll('_id', 'id');
  const newObj = JSON.parse(str)
  const result = { ...newObj, category: newObj.categories }
  return result;
} 