export default class HttpService{
    static API_URL="http://127.0.0.1:8080/api/";
    static async get(url:string){
        const data= await fetch(this.API_URL+url);
        return await data.json()
    }
}