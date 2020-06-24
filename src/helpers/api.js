const put = (url, data) => {
    localStorage.setItem(url, JSON.stringify(data));
}

const get = (url) => {
    return localStorage.getItem(url);
}

const deleteEndpoint = (url) => {
	localStorage.removeItem(url);
}

export {
    put,
    get,
    deleteEndpoint
}