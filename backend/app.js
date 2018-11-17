const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/budgetql'
const PORT = process.env.PORT || 7000
const moongose = require('mongoose')
const cors = require('cors')
const graphQLSchema = require('./graphql/schema')
const app = express()

// allow cors
app.use(cors())

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useNewUrlParser: true
}

moongose.connect(mongoURI, connectOptions, (er, db) => {
  if (er) console.log(`Error`, er)
  console.log(`Connected to MongoDB`)
})

app.use('/graphql', graphqlHTTP({
  schema: graphQLSchema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
