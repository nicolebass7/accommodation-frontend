import apiClient from "./services.js";

export default {
  getAll() {
    return apiClient.get("/student");
  },
  getAllForUser(userId) {
    return apiClient.get("/student/userTut/" + userId);
  },
  get(id) {
    return apiClient.get(`/student/${id}`);
  },
  create(data) {
    return apiClient.post("/student", data);
  },
  update(id, data) {
    return apiClient.put(`/student/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/student/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/student`);
  },
  findByTitle(title) {
    return apiClient.get(`/tutorials?title=${title}`);
  },
};
