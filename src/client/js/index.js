import "../styles/styles.scss"
import receiveData from "./receiveData";
import getData from "./getData";
import postData from "./postData";

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const key = `${process.env.API_KEY}`;

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