import {
    API
} from "../utils/config";

/**
 * Fetch data (recipes) from API
 * @param {Object} searchingItem - To identify is a user is searching or not
 * @param {string} page - The requesting page number of the pagination
 * @returns {Object}
 */
export const fetchAPI = async (searchingItem, page) => {
    try {
        let apiURL = `recipes/?page=${page? page : ''}`;
        if (searchingItem.searching) {
            apiURL = `recipes/?q=${searchingItem.query}&page=${page? page : ''}`;
        }

        const response = await API.get(apiURL);
        const data = response.data;
        
        if (response.data.posts.length === 0) {
            return {
                success: false,
                errorMessage: "Result Not Found."
            }
        }

        return {
            success: true,
            ...data
        }
    } catch (error) {
        if (!error.response) {
            return {
                success: false,
                errorMessage: "Service is not available."
            }
        } else if (error.response.status === 404) {
            return {
                success: false,
                errorMessage: "Result Not Found."
            }
        } else {
            return {
                success: false,
                errorMessage: "Failed to load the content."
            }
        }
    }
};