import { getData, baseURL, url, key } from "../client/js/getData"

test("Fetches data from the api url", () => {
    expect(getData(baseURL, url, key)).toBe(Promise.Promise)
})
