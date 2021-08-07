const apiUrl = 'https://angular-apps-8d615-default-rtdb.firebaseio.com';

export const API = {
  HEROE: {
    GET_ALL: `${apiUrl}/heroes.json`,
    EDIT: `${apiUrl}/heroes/:id.json`
  }
}