import axios from 'axios'

export function getAuthToken() {
 return localStorage.getItem("token")
}

export default function(){
 return axios.create({
  URL:"http://localhost:5000",
  headers: {
   Authorization: getAuthToken(),

  },
 })
}