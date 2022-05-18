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

const apple = new Fruit({
    name: "Apple",
    rating: 9,
    review: "Merah dan Manis"
})

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Hijau, asam manis"
})

const pisang = new Fruit({
    name: "Pisang",
    rating: 8,
    review: "Kuning manis"
})

apple.save().then(() => {
    console.log("Insert data success")
}).catch((error) => {
    console.log(error)
})

Fruit.insertMany([kiwi, pisang]).then(() => {
    console.log("Insert many data success")
}).catch((error) => {
    console.log(error)
})