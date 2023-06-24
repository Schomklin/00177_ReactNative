const SITE_NAME = "Information Technology";
const BASE_URL = "http://it.tni.ac.th";
const COLOR_THEME = "blue";
const ALLOW_SIGNUP = true;

console.log("Welcome to "+ SITE_NAME);
let languages = ["JavaScript","Python","Ruby","Java","PHP"];
for(let i in languages){
    let url = BASE_URL + "lang/" + languages[i].toLowerCase();
    console.log(`- ${languages[i]} programming(${url})`);
}