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

Fruit.deleteOne({ _id: '6283539fdc9ada2031c10ac4' }).then(() => {
    console.log("Delete data success")
}).catch((error) => {
    console.log(error)
})