const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/db-mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [ true, "Name is required" ]
      },
    rating: {
        type: Number,
        min: 6,
        max: 10
    },
    review: String  
  })

const Fruit = mongoose.model("Fruit", fruitSchema)

const peopleSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [ true, "Name is required" ]
      },
    age: Number,
    favorite: fruitSchema
  })

const People = mongoose.model("People", peopleSchema)

const leci = new Fruit({
    name: "Leci",
    rating: 9,
    review: "Merah dan Manis"
})

const people = new People({
    name: "Aslim",
    age: 25,
    favorite: leci
})

leci.save().then(() => {
    console.log("Insert data fruit success")
}).catch((error) => {
    console.log(error)
})

people.save().then(() => {
    console.log("Insert data people success")
}).catch((error) => {
    console.log(error)
})