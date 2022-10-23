import postData from "../client/js/postData"

test("Post the data fetched to the url passed to the postData function", () => {
    expect(postData(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: data
        })
    })).toBe(Promise.Promise)
})