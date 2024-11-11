'use strict';

const ids = [
    "1141693825761415238", "1248408254246289410", "1229450170056314880", "963266843525656628", 
    "1198080598720389153", "546490722774417419", "972967264599023676", "778619469135478794",
    "1068585206832955484", "919467701141917697", "757301437154721872", "446446966818471947"
];

const idToElementIdMap = {
    "1141693825761415238": "´rasante",
    "1248408254246289410": "'Magnata",
    "1229450170056314880": "boyzin",
    "963266843525656628" : "silver",
    "1198080598720389153": "fonseca",
    "546490722774417419": "'big",
    "972967264599023676": "Zeus",
    "778619469135478794": "gbzin",
    "1068585206832955484": "Pele",
    "919467701141917697": "emmex",
    "757301437154721872": "Lv",
    "446446966818471947": "Nunes",
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
