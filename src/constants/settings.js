const tokenKey = "token";
const userKey = "user";

export function saveToStorage(key, value) {
	localStorage.setItem(key, value);
}

export function saveToken(token) {
	saveToStorage(tokenKey, token);
}

export function getToken() {
	return localStorage.getItem("token");
}

export function removeToken() {
	return localStorage.removeItem("token");
}
