//import authServices from "./authServices.js";
import apiClient from "./services.js";

export default{
    getAll(){
        return apiClient.get("requests");
    },
    get(id){
        return apiClient.get(`/requests/${id}`, authServices);
    },
    create(data){
        return apiClient.post("requests", data);
    },
    update(id, data){
        return apiClient.put(`requests/${id}`, data);
    },
    delete(id){
        return apiClient.delete(`requests/${id}`);
    },
    deleteAll(){
        return apiClient.delete("requests");
    },
    findByType(type){
        return apiClient.get(`requests?type=${type}`);        
    }
};
