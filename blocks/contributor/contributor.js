import { createOptimizedPicture } from '../../scripts/aem.js';
/* fetching data for contributors */
const url = "/contributors.json";
let jsonData = "";
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}



export default async function decorate(block) {
    jsonData = await getJson(url);    
    console.log("after call", jsonData);

    let contributorList = jsonData.contributor;

    console.log("hi", contributorList);
 
    const ul = document.createElement('ul');
    ul.classList.add("contributor-list");
   
    (contributorList.data).forEach(el => {
        const li = document.createElement('li');
        li.classList.add("contributor-list-item")
        li.innerHTML = `<div class="contributor-picture"><img src=${el.image_url}></div>
        <div class="contributor-name">${el.name}</div>
        <div class="contirbutor-profile">${(el.tags).split(",").join(" | ")}</div>
        <div class="social-profile">
        <a href="${el.facebook}"><img src="./icons/facebook.png"></a>
        <a href="${el.twitter}"><img src="./icons/twitter.png"></a>
        <a href="${el.instagram}"><img src="./icons/instagram.png"></a>
        </div>`;

        ul.append(li);
    });   
   
       block.textContent = '';
       block.append(ul);
}