import getData from "../client/js/getData"

test("Fetches data from the api url", () => {
    expect(getData(baseURL, url, key)).toBe(Promise.Promise)
})
