const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({ name: String, age: Number });
const User = mongoose.model("User", userScheme);

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");

    // обновление с фильтрацией по id
    const id = "641bddcf9b968d1644d1786f";
    const user = await User.findByIdAndUpdate(id, { name: "Sam", age: 25 });
    console.log("Обновленный объект", user);
}
main().catch(console.log).finally(async () => await mongoose.disconnect());