/* fetching data for contributors */
 const url = "/contributors.json";
//const url = `https://main--franklinpractice--jain12swati.hlx.page/contributors.json`;
/* let x = {};
fetch(`${pageUrl}`)
.then(response)
.then(console.log("success", response));  */

fetch('url')
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });