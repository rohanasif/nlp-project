import "./styles/styles.scss"
import receiveData from "./js/receiveData"
import getData from "./js/getData"
import postData from "./js/postData"

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const key = `${process.env.API_KEY}`;

function isValid(url) {
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);

    return url.match(regex)

}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;


    if (url !== "" && isValid(url)) {
        submitBtn.classList.remove("invalid");
        getData(baseURL, url, key)
            .then(function (data) {
                postData("/add", { data: data });
            }).then(function () {
                receiveData()
            }).catch(function (error) {
                console.log(error);
                alert("Invalid input");
            });
        userInfo.reset();
    }
    else {
        submitBtn.classList.add("invalid");
        alert("Invalid url!")
    }
})