const getData = async (baseURL, url, key) => {
    const res = await fetch(`${baseURL}?key=${key}&txt=${url}`)
    try {
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log("error", error);
    }
}

export default getData