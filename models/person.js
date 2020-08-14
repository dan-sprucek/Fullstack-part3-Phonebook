const mongoose = require("mongoose")

const url = 'mongodb+srv://fullstack:qwer1234@cluster0.dlsm1.mongodb.net/phonebook-app?retryWrites=true&w=majority'

console.log("connecting to", url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("connected to MongoDB")
    })
        .catch(error => {
        console.log("not connected to Mongo, error:", error)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
    
module.exports = mongoose.model("Person", personSchema)