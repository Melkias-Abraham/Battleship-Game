const express = require('express')
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 3000
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app) 
const io = socketio(server)

// Set static folder
app.use(express.static(path.join(__dirname, "src")))

// Start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// Handle a socket connection request from web client
const connections = [null, null]

io.on('connection', socket => {
  console.log('New web connection')

  // Find an avaliable player number
  let playerIndex = -1;
  for (const i in connections) {
    if (connection[i] === null) {
      playerIndex = i
      break
    }
  }

  // Ignore player 3
  if (playerIndex === -1) return

  // Tell the connection client what player number they are
  socket.emit('player-number', playerIndex)

  console.log(`Player ${playerIndex} has connected`)
})

