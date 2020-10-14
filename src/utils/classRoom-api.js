const BASE_URL = '/api/classes';


//this is the index function for all Class
export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

//this is create function that doesn't need 
export function create(cRoom) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(cRoom)
  }).then(res => res.json());
}
// export function update(Class) {
//   return fetch(`${BASE_URL}/${Class._id}`, {
//     method: 'PUT',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify(Class)
//   }).then(res => res.json());
// }
// export function deleteOne(id) {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE'
//   }).then(res => res.json());
// }