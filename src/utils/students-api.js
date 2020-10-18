import tokenService from './tokenService';
const BASE_URL = '/api/students';



//this is the index function for all Class
export function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
  })
  .then(res => res.json());
}


//this is create function that doesn't need 
export function create(student, userId, classId) {
  console.log('DAAAAMMMNNN', student)

  return fetch(BASE_URL, {
    
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken()
  },
    body: JSON.stringify({...student, 'user': userId })
   
  })
  .then(res => res.json());
}
// export function update(student) {
//   return fetch(`${BASE_URL}/${Student._id}`, {
//     method: 'PUT',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(student)
//   }).then(res => res.json());
// }
// export function deleteOne(id) {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE'
//   }).then(res => res.json());
// }