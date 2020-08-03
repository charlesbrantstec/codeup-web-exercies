
const lastDateOfCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events/public`,
        {headers: {'Authorization' : `token ${githubKey}`}}).then(resp => resp.json()).then
    (data => {
        console.log(data);
        let date =  ""
        for (let datum of data){
            if (datum.type === "PushEvent"){
                date = datum.created_at;
                break;
        }
    }
    return date;
    }).then(date => document.getElementsByTagName("body")[0].innerText = date);
}

lastDateOfCommit("charlesbrantstec");

const wait = (time) => new Promise(resolve => setTimeout(() => {
    resolve(`You will see this message after ${time} milliseconds.`)
}, time));

wait(1200).then(() => console.log("You will see this after 1200 milliseconds"));
