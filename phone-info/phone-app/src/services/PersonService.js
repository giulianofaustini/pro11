import axios from "axios";


const baseUrl = 'http://localhost:3001/api/persons'

  const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const nameTakeOut = (id) => {

  const request = axios.delete(`http://localhost:3001/api/persons/${id}`)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (id, newPerson) => {
  const request = axios.put(`http://localhost:3001/api/persons/${id}`,  newPerson)
  return request.then(response => response.data)

}
const PersonService = {getAll, nameTakeOut, create , update }

  export default PersonService
