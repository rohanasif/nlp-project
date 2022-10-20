const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const key = "a6cfb6bfd8bc63b829e4dbcfdb92ee2e";
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const url = document.getElementById("url").value;
    if (url !== "") {
        getData(baseURL, url, key)
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

const postData = async () => {

}