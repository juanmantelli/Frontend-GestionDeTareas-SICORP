import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getTickets = (params, token) =>
  axios.get(`${API_URL}/tickets`, {
    headers: { Authorization: `Bearer ${token}` },
    params,
  });

export const getTicketById = (ticketId, token) =>
  axios.get(`${API_URL}/tickets/${ticketId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createTicket = (data, token) =>
  axios.post(`${API_URL}/tickets`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateTicket = (ticketId, data, token) =>
  axios.put(`${API_URL}/tickets/${ticketId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteTicket = (ticketId, token) =>
  axios.delete(`${API_URL}/tickets/${ticketId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const tomarTicket = (ticketId, token) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/tickets/${ticketId}/tomar`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const reasignarTicket = (ticketId, usuarioId, token) => 
  axios.post(
    `${import.meta.env.VITE_API_URL}/tickets/${ticketId}/reasignar`,
    { usuarioId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const cambiarCategoria = (ticketId, categoriaId, token) =>
  axios.put(
    `${API_URL}/tickets/${ticketId}`,
    { categoriaId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const updateHoras = (id, horasCargadas, token, forzar = false) =>
  axios.put(`${API_URL}/tickets/${id}/horas`, { horasCargadas, forzar }, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getHistorial = (ticketId, token) =>
  axios.get(`${API_URL}/tickets/${ticketId}/historial`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getComentarios = (ticketId, token) =>
  axios.get(`${API_URL}/tickets/${ticketId}/comentarios`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addComentario = (ticketId, data, token, parentId = null) => {
  const isFormData = typeof FormData !== "undefined" && data instanceof FormData;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  if (!isFormData) {
    config.headers["Content-Type"] = "application/json";
  }
  return axios.post(
    `${API_URL}/tickets/${ticketId}/comentarios`,
    data,
    config
  );
};

export const getArchivoUrlFirmada = (key, token) =>
  axios.get(`${API_URL}/tickets/archivo-url/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${token}` },
  });