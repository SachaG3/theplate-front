export default class HttpService {


    /**
     * Http get request
     */

    static async get(url: string, headers?: any): Promise<any> {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        return await response.json();
    }

    /**
     * Http post request
     */
    static async post(url: string, data: any, headers?: any): Promise<any> {
        console.log(data)
        const response = await fetch(url, {
            method: 'POST',
            headers: headers || {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        return await response.json();
    }
}
