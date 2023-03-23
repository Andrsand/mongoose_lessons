const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы со значениями по умолчанию
const userScheme = new Schema({
    name: {
        type: String,
        default: "NoName"
    },
    age: {
        type: Number,
        default: 22
    }
});
// определяем модель User
const User = mongoose.model("User", userScheme); // Mongoose затем будет автоматически искать в базе данных коллекцию, название которой соответствует названию модели во множественном числе, т.е. users
//  Если такой коллекции в базе данных нет, то она будет создана автоматически

// создаем объекты модели User в т.ч. со значениями по умолчанию
const user = new User(); // name - NoName, age - 22

console.log(user);

async function main() {
    // подключемся к базе данных
    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");

    // сохраняем модель user в базу данных
    await user.save();
    console.log("Сохранен объект", user);

    // отключаемся от базы данных
    await mongoose.disconnect();
}
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log);