const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/db-mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String  
})

const Fruit = mongoose.model("Fruit", fruitSchema)

Fruit.find().then((fruits) => {
    mongoose.connection.close()
    fruits.forEach((item, index) => {
        console.log(item.name)
    })
}).catch((error) => {
    console.log(error)
})
