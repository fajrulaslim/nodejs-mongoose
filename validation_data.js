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

const apple = new Fruit({
    name: "Anggur",
    rating: 8,
    review: "Ungu dan Manis"
})

apple.save().then(() => {
    console.log("Insert data success")
}).catch((error) => {
    console.log(error)
})