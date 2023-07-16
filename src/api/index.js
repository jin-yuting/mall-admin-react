import service from "../utils/request";

export function login(data){
  return service.get('/api/login/', data)
}