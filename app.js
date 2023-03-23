const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({ name: String, age: Number });
const User = mongoose.model("User", userScheme);

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");

    // получаем все объекты из БД
    const users = await User.find({ name: "Tom" }); // поиск докумета по определенным свойствам. В данном случае по имени
    console.log(users);
}
main().catch(console.log).finally(async () => await mongoose.disconnect());