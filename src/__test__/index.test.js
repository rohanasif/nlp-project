import "../client/styles/styles.scss"
import { isValid, receiveData, getData, postData } from "../client/index"

test("Checks if data entered by user is a valid URL", () => {
    expect(isValid("www.google.com")).toBe(true);
    expect(isValid("This is a string")).toBe(false);
})