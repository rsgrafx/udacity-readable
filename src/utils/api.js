const API_ENDPOINT = 'http://localhost:5001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': token
}

export const createPostApi = (post) => {
  let post_data = JSON.stringify(post)
  return fetch(`${API_ENDPOINT}/posts`, {
    method: 'POST',
    headers: headers,
    body: post_data
  }).then((resp) => resp.json())
}
export const fetchPosts = () => {
  return fetch(`${API_ENDPOINT}/posts`, {headers})
    .then((res) => res.json())
}

export const fetchCategories = () => {
  return fetch(`${API_ENDPOINT}/categories`, {headers})
    .then((res) => res.json())
}
