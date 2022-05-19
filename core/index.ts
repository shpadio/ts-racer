import {Game} from "./models/Game";

const canvas: HTMLCanvasElement  = document.createElement('canvas')
canvas.className = 'canvas'


const greetingsModal = document.createElement('div')
document.append(greetingsModal.innerHTML = `<div><h6>Start a game</h6><button id="start">OK</button></div>`)

const startButton = document.getElementById('start')
startButton?.addEventListener('click',() => {
    alert('game started!')
    const game = new Game(canvas)
    console.log(game,'GAME!')
})





const player = document.createElement('div')
const road = document.getElementById('road') as Node

player.className = 'player'

canvas?.appendChild(road)
road.appendChild(player)



