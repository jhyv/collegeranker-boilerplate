import { API_ENDPOINT } from "../constants/endpoints";

export const getUniversities = (query?: string) => {
    return new Promise(async (resolve, reject) => {
        fetch(`${API_ENDPOINT}&name=${query || ''}`)
            .then(async (response) => {
                resolve(response.json())
            })
            .catch((error) => reject(error));
    })
}