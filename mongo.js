const mongoose = require("mongoose");

const connectMongo = () => {
  return mongoose.connect("mongodb://localhost:27017/test");
};

const Cat = mongoose.model("Cat", { name: String, age: Number });
// const kitty = new Cat({ name: "Peter", age: 3 });
// kitty.save().then(() => console.log("add new meow"));
// let results = Cat.find({}).exec();
// results.then((results) => console.log(results));

module.exports = { connectMongo, Cat };
