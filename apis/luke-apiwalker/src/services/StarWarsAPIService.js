import axios from "axios";

const http = axios.create({
    baseURL: "https://swapi.dev/api/"
});

export const getData = async(topic, id) => {
    const result = await http.get(`/${topic}/${id}`)
    return result.data
}