import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
  });


export const getAllAuthors = async () => {
    const res = await http.get("authors");
    return res.data;
}

export const getAuthorById = async (id) => {
    const res = await http.get(`authors/${id}`);
    return res.data;
}

export const createAuthor = async (data) => {
    console.log(data);
    const res = await http.post("authors", data);
    console.log(res.data);
    return res.data;
}

export const updateAuthorById = async (id, data) => {
    const res = await http.put(`authors/${id}`, data);
    return res.data;
}

export const deleteAuthorById = async (id) => {
    const res = await http.delete(`authors/${id}`);
    return res.data
}

