console.log("start");

setTimeout(function cbT() {
  console.log("CB Settimeout");
}, 4000);

fetch("https://api.github.com/")
  .then(function cbF(response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("CB Fetch");
  })
  .catch(function(error) {
    console.error("Error fetching data:", error);
  });

//   micro task queue   -  callback function which comes through promise will go inside the micro task queue ..and there something called mutation observer 
