const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const key = "Your_api_key";

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;

    if (url !== "") {
        getData(baseURL, url, key)
            .then(function (data) {
                postData("/add", { data: data });
            }).then(function () {
                receiveData()
            }).catch(function (error) {
                console.log(error);
                alert("Invalid input");
            })
    }
})

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

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: data
        })
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
};

const receiveData = async () => {
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json()
        console.log(allData)
        // Write updated data to DOM elements
        document.getElementById('result').innerHTML = allData;
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}