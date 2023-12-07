/* fetching data for contributors */
 const contributorFile = "/contributors.json";
const pageUrl = `/contributors.json`;
let x = {};
fetch(`${pageUrl}`)
.then(x => x.text())
.then(console.log("success", x)); 


/* const pageUrl = `/contributors.json`;

 function getArtistsList() {
  const response =  fetch(`${pageUrl}`);
  //const results =  response.json();
  const data = results.data;

  console.log("success", data)

  return data;
}

getArtistsList(); */