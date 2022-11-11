const http = require('node:http');

// create todo item
// POST+body

// get all todo items
// GET

// edit todo item
// PUT body

// delete todo item
// DELETE body


// /todo [POST]
// /todo [GET]
// /todo [PUT]
// /todo [DELETE]

let storage = [
  {
    id: 123,
    picture: "",
    description: "",
    task: "",
    deadline: new Date()
  }
]

const server = http.createServer(function (req, res) {


  if (req.method == 'GET') {
    res.write(JSON.stringify(storage))
    res.statusCode = 200
    res.end()

  } else if (req.method == 'POST') {
    let requestBody = ''

    req.on('data', function (chunk) {
      requestBody += chunk
    })
    req.on('end', () => {
      const body = JSON.parse(requestBody)
      storage.push(body)
      res.statusCode = 201
      res.end()
    })
    
  } else if (req.method == 'PUT') {
    let requestBody = ''

    req.on('data', function (chunk) {
      requestBody += chunk
    })
    req.on('end', () => {
      const body = JSON.parse(requestBody) // {id: 12313}
      for (let i = 0; i < storage.length; i++) {
        if (storage[i].id == body.id) {
          storage[i].picture = body.picture
          storage[i].task = body.task
          storage[i].description = body.description

          res.statusCode = 200
          res.end()
          return
        }
      }

      res.statusCode = 404
      res.end()
    })
  }
})

const host = 'localhost'
const port = 8080

server.listen(port, host, undefined, function () {
  console.log(`Server running at ${host}:${port}`)
})