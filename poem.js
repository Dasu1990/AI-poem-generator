
function display(response) {    

    new Typewriter("#poem", {
        strings:  response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
    });

}
function generate(event) {
    event.preventDefault();
    let topic= document.querySelector("#topic");
    let hidden = document.querySelector("#poem");
    hidden.classList.remove("hidden");
    hidden.innerHTML = `<span class="blink">Generating a poem about ${topic.value}</span>`;
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Your are a good AI Assistant that writes short and sweet poem. The poem must be provided in HTML format. Example: <p>this is a poem</p> make sure to follow user instraction";
  let prompt = `user instruction: Generate a short and unique poem about ${topic.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("called the AI api");
  axios.get(apiUrl).then(display);
}
let poem = document.querySelector("#poem-generator");
poem.addEventListener("submit", generate);