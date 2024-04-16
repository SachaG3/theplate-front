export default class HttpService {
    static API_URL = "http://127.0.0.1:8080/api/";

    static async get(url: string) {
        const response = await fetch(this.API_URL + url);
        return await response.json();
    }

    static async post(url: string, data: any) {
        const response = await fetch(this.API_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        });
        return await response.json();
    }

}
