import apiClient from "./services.js";

export default {
  getAll() {
    return apiClient.get("/request");
  },
  getAllForUser(userId) {
    return apiClient.get("/request/user/" + userId);
  },
  get(id) {
    return apiClient.get(`/request/${id}`);
  },
  create(data) {
    return apiClient.post("/request", data);
  },
  update(id, data) {
    return apiClient.put(`/request/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/request/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/request`);
  },
  findByTitle(title) {
    return apiClient.get(`/request?title=${title}`);
  },
};
