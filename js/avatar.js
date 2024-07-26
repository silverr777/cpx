'use strict';

const ids = [
    "1141693825761415238", "1248408254246289410", "1229450170056314880", "818626610822905866", 
    "1198080598720389153", "546490722774417419", "972967264599023676", "778619469135478794", 
    "1141699044087959676", "446446966818471947", "757301437154721872", "844634000906649621",
    "1229420331115220993", "1098236797026324590",

];

const idToElementIdMap = {
    "1141693825761415238": "´rasante",
    "1248408254246289410": "'Magnata",
    "1229450170056314880": "boyzin",
    "818626610822905866" : "silver",
    "1198080598720389153": "fonseca7",
    "546490722774417419": "BIGDICK",
    "972967264599023676": "Zeus",
    "778619469135478794": "gbzin",
    "1141699044087959676": "Tony",
    "446446966818471947": "Nunes",
    "757301437154721872": "Lv",
    "844634000906649621": "Pelé",
    "1229420331115220993": "silva",
    "1098236797026324590": "alemão",
};

ids.forEach(id => {
    fetch(`https://discord-web-api.glitch.me/discord/user/${id}`, {
        method: "GET",
        mode: "cors"
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(data => {
            console.log(data.url);
            console.log(data.username);
            document.getElementById(idToElementIdMap[id]).src = data.url;
            document.getElementById("username").src = data.username;
        })
        .catch(error => {
            console.warn("Something went wrong.", error);
            document.getElementById(idToElementIdMap[id]);
            document.getElementById("username");
        });
});