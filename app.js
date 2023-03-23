const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({ name: String, age: Number });
const User = mongoose.model("User", userScheme);

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");

    // удаляем все объекты из БД, у которых age=34
    const result = await User.deleteMany({ age: 34 });
    console.log(result);
}
main().catch(console.log).finally(async () => await mongoose.disconnect());