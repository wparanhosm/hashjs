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
    section = document.getElementById("main"),
    restart = document.getElementById("restart")


let checkedX = [], // recebe posições quando o jogador for X
    checkedO = [], // recebe posições quando o jogador for O
    player = true, // true == X, false == O
    typeEvent = (screen.width < 600) ? "touchend" : "click" // Verifica se é desktop ou Mobile

// Array de arrays com todas as combinações.
const combinations = [
    // Horizontal
    ["a1", "a2", "a3"],
    ["b1", "b2", "b3"],
    ["c1", "c2", "c3"],

    // Vertical
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
    ["a3", "b3", "c3"],

    // Diagonal
    ["a1", "b2", "c3"],
    ["a3", "b2", "c1"]
]

// Função pra reiniciar o jogo
restart.addEventListener("click", () => {document.location.reload(true)})

// Checar se o o player atual fez uma combinação de vitória ou empate
const checkWinner = () => {

    // Quem fizer 3 ganha.
    let winX = 0;
    let winO = 0;


    // Samerda ainda n funciona. Basicamente eu estou verificando se CheckedX ou CheckedO ja atingiu uma combinação.
    //Dai eu finalizaria o jogo na chamada da função.
    // checkedX.forEach(X => {
    //     for (let contV = 0; contV < combinations.length; contV++) {
    //         for (let contH = 0; contH < combinations[contV].length; contH++) {
    //             if (X == combinations[contV][contH]) winX++
    //         }
    //     }
    //     console.log(winX)
    //     if (winX == 3) console.log("winX")

    // })

    // checkedO.forEach(O => {
    //     for (let contV = 0; contV < combinations.length; contV++) {
    //         for (let contH = 0; contH < combinations[contV].length; contH++) {
    //             if (O == combinations[contV][contH]) winO++
    //         }
    //     }
    //     console.log(winO)
    //     if (winO == 3) console.log("winO")

    // })

    // Vencedor X == 1, Vencedor O == 2, Empate = 0
    if (winX == 3 && winO == 3) return 0
    if (winX == 3) return 1
    if (winO == 3) return 2

}

// Recebe o elemento(block) e seu nome(check).
function eventClick(block, check) {
    // Cada bloco tem o evento de click ou toque, de acordo com a largura da tela.
    block.addEventListener(typeEvent, () => {

        let validBlock = true // True == pode adicionar X ou O no bloco.

        // Verifica se a posição não está ocupada. Se estiver, o validBlock recebe false.
        checkedX.forEach(x => { if (x == check) validBlock = false })
        checkedO.forEach(o => { if (o == check) validBlock = false })
        console.log(checkWinner())
        // As marcações do bloco só vão ocorrer se o bloco clicado estiver livre.
        if (validBlock) {
            // As veriaveis Checked X e O recebem o campo respectivo que esta sendo ocupado.
            player ? checkedX.push(check) : checkedX.push(check)

            // Encerrando o jogo caso algum jogador tenha vencido. 
            if (checkWinner() == 1) {

                document.getElementById("result").style.display = "flex"
                document.getElementById("winnerX").style.display = "flex"
                restart.style.display = "flex"

            } else if (checkWinner() == 2) {

                document.getElementById("result").style.display = "flex"
                document.getElementById("winnerO").style.display = "flex"
                restart.style.display = "flex"

            } else if (checkWinner() == 0) {

                document.getElementById("result").style.display = "flex"
                document.getElementById("tie").style.display = "flex"
                restart.style.display = "flex"

            } else {
                // Quando clicado no block, ele define a imagem X ou O de acordo com o valor de player.
                block.style.backgroundImage = `url(${player ? "Images/X.png" : "Images/O.png"})`;

                // No desktop ele adiciona a imagem de X ou O no lugar do cursor, e se for mobile ele não faz nada.
                typeEvent == "click"
                    ?
                    section.style.cursor = `url(${player ? "Images/O.png" : "Images/X.png"}) 50 50, pointer`
                    :
                    section.style.cursor = "default"

                // Mensagem abaixo do jogo que mostra quem irá jogar. A cada click altera o a vez do jogador pela imagem.
                playerTime.setAttribute('src', `${player ? "Images/O.png" : "Images/X.png"}`)
                // Ao final, ele muda o valor de player pra poder alterar a imagem nas validações acima.
                player = !player
            }


        }

    })

}

// Função de click chamada pra todos os elementos.

eventClick(a1, "a1")
eventClick(a2, "a2")
eventClick(a3, "a3")

eventClick(b1, "b1")
eventClick(b2, "b2")
eventClick(b3, "b3")

eventClick(c1, "c1")
eventClick(c2, "c2")
eventClick(c3, "c3")
