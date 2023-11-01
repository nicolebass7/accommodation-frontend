import authServices from "./authServices.js";
import apiClient from "./services.js";

export default{
    getAll(){
        return apiClient.get("/students", authServices);
    },
    get(id){
        return apiClient.get(`/students/${id}`, authServices);
    },
    create(data){
        return apiClient.post("/students", data);
    },
    update(id, data){
        return apiClient.put(`/students/${id}`, data);
    },
    delete(id){
        return apiClient.delete(`/students/${id}`);
    },
    deleteAll(){
        return apiClient.delete("/students");
    },
    findByName(name){
        return apiClient.get(`students?type=${name}`);        
    }
};
