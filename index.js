const a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2"),
    a3 = document.getElementById("a3"),
    c1 = document.getElementById("c1"),
    c2 = document.getElementById("c2"),
    c3 = document.getElementById("c3"),
    b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    playerTime = document.getElementById("playerTime"),
    section = document.getElementById("main")


let allPositions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"],
    checked = [],
    player = true, // true == X, false == O
    typeEvent = (screen.width < 600) ? "touchend" : "click",
    image = ""


function eventClick(block, check) {

    block.addEventListener(typeEvent, () => {
        checked.push(check)

        block.style.backgroundImage = `url(${player ? "Images/X.png" : "Images/O.png"})`;

        typeEvent == "click"
            ?
            section.style.cursor = `url(${player ? "Images/O.png" : "Images/X.png"}) 50 50, pointer`
            :
            console.clear()
            
        playerTime.setAttribute('src', `${player ? "Images/O.png" : "Images/X.png"}`)    
        player = !player

    })

}

eventClick(a1, "a1")
eventClick(a2, "a2")
eventClick(a3, "a3")

eventClick(b1, "b1")
eventClick(b2, "b2")
eventClick(b3, "b3")

eventClick(c1, "c1")
eventClick(c2, "c2")
eventClick(c3, "c3")
