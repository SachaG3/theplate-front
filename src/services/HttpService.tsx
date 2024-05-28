export default class HttpService {

    /**
     * Http get request
     */
    static async get(url: string, headers?: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la requête GET:', error);
            throw error;
        }
    }

    /**
     * Http post request
     */
    static async post(url: string, data: any, headers?: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers || {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la requête POST:', error);
            throw error;
        }
    }
}