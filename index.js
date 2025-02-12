let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let winnerDisplay = document.getElementById("winner-display")

fightButton.addEventListener("click", function() {
    
    //get first ramdon fighter
    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let fighterOne = fighters[randomIndexOne]
    
    // Get second random fighter
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    let fighterTwo = fighters[randomIndexTwo]
    
    // Display the matchup
    stageEl.textContent = `${fighterOne} `
    stageEl.innerHTML += `<span class="vs">vs</span>`
    stageEl.innerHTML += ` ${fighterTwo}`
    
    // Clear previous winner
    winnerDisplay.innerHTML = ""
    
    // Pick winner after a short delay
    setTimeout(() => {
        const winner = Math.random() < 0.5 ? fighterOne : fighterTwo
        winnerDisplay.innerHTML = `<span class="winner">${winner} wins! 🏆</span>`
    }, 500)
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
