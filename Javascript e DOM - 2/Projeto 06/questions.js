
async function getQuestions() {
    let url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    let data = await fetch(url);
    let json = await data.json();

    if (json.response_code === 0)
        return json.results;


    return { error: "can't fetch" }

}


