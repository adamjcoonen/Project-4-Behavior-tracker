import tokenService from './tokenService';
const BASE_URL = '/api/classrooms';



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
export function getOneClass(classId){
  return fetch(`${BASE_URL}/ClassroomDetails/${classId}`, {
    method:'GET',
    headers: {'content-type': 'application/json',
    'authorization': 'Bearer ' + tokenService()
  }
  }).then(res => res.json());
}


//this is create function that doesn't need 
export function create(cRoom, userId) {
  console.log(userId);
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + tokenService.getToken(),
  },
    body: JSON.stringify({...cRoom, 'user': userId })
  }).then(res => res.json());
}
// export function update(Classroom) {
//   return fetch(`${BASE_URL}/${Classroom._id}`, {
//     method: 'PUT',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(Classroom)
//   }).then(res => res.json());
// }
// export function deleteOne(id) {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE'
//   }).then(res => res.json());
// }