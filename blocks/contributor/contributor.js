import { createOptimizedPicture } from '../../scripts/aem.js';
/* fetching data for contributors */
//const url = "/contributors.json";

let jsonData = "";
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}



export default async function decorate(block) {
    const url = block.children?.[0]?.children?.[0]?.textContent ;
    console.log("my url", url);
  //  jsonData = await getJson(url); 
 //  fetch(url).then(x => x.text());
   // let data =  response.json()   
   // console.log("after call", response);
   const ul = document.createElement('ul');
   try {
     const response = await fetch(url);
     const {data = []} = await response.json(); 
      ul.classList.add("contributor-list");
   
    data.forEach(el => {
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
   } catch {

   }
 
    
   
       block.innerHTML = '';
       block.appendChild(ul);
}