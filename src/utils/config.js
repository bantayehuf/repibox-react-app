/**
 * Configuration file of the project
 * @author Bantayehu F<bantayehuf@gmail.com>
 */
import axios from "axios";

// API hosting domain
const API_HOST = "https://www.larecipe.com"

// The common url path for all requests
const API_BASE_URL = `${API_HOST}/api/`;

// Axios instance
const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000, // timeout 20 seconds
    headers: {
        common: {
            "Content-Type": "application/json",
        },
    },
});

export {
    API_HOST,
    API_BASE_URL,
    API,
};