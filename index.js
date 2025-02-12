let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    
    //get first ramdon fighter
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let fighterOne = fighters[randomIndexOne]
    
    // Get second random fighter
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    let fighterTwo = fighters[randomIndexTwo]
    
    // Display the matchup
    stageEl.textContent = `${fighterOne} vs ${fighterTwo}`
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
