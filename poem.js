function generate(event) {
    event.preventDefault();
    //let poemGen = document.querySelector("#poem");
    
    new Typewriter("#poem", {
        strings: "A flower blooms, brief but bright a gentle spark of fleeting light",
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}

let poem = document.querySelector("#poem-generator");
poem.addEventListener("submit", generate);