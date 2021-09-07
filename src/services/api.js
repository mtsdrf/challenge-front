import axios from "axios";

const api = axios.create({
    baseURL: "https://swapi.dev/api/people",
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use( x => {
    x.meta = x.meta || {}
    x.meta.requestStartedAt = new Date().getTime();
    return x;
});

api.interceptors.response.use(x => {
    x.config.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
    return x;
});

export const getData = async (param) => {
    const res = await api.get(param).catch(() => null);

    if(res && res.data){
        return {
            name: res.data.name,
            time: res.config.responseTime
        }
    } else {
        return null;
    }
}

export default api;