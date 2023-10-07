const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

// document.querySelectorAll
canvas.width = innerWidth
canvas.height = innerHeight
c.fillStyle = "rgb(100,100,100)"
c.fillRect(10, 10, 30, 30)
