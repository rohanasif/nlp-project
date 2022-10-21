const receiveData = async () => {
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json()
        const dataAsObject = allData["data"]["data"]
        console.log(dataAsObject)
        // Write updated data to DOM elements
        document.getElementById('agreement').innerHTML = "Agreement: " + allData["data"]["data"]["agreement"];
        document.getElementById('confidence').innerHTML = "Confidence: " + allData["data"]["data"]["confidence"];
        document.getElementById('irony').innerHTML = "Irony: " + allData["data"]["data"]["irony"];
        document.getElementById('model').innerHTML = "Model: " + allData["data"]["data"]["model"];
        document.getElementById('score_tag').innerHTML = "Score Tag: " + allData["data"]["data"]["score_tag"];
        document.getElementById('sentence_list').innerHTML = "Sentence List: " + allData["data"]["data"]["sentence_list"];
        document.getElementById('sentimented_concept').innerHTML = "Sentimented Concept: " + allData["data"]["data"]["sentimented_concept"];
        document.getElementById('sentimented_entity_list').innerHTML = "Sentimented Entity List: " + allData["data"]["data"]["sentimented_entity_list"];
        document.getElementById('status').innerHTML = "Status: " + allData["data"]["data"]["status"];
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + allData["data"]["data"]["subjectivity"];
    }
    catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

export default receiveData