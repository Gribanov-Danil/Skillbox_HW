function LetsGoChill(currentDate : Date) : string{
    var currentDay = currentDate.toString().slice(0, 3)
    return currentDay === "Sat" || currentDay === "Sun"?
     "Иииу, пора на выходной!" : "Пока ещё работаем :("
}

let currentDateTime = new Date();
console.log(LetsGoChill(currentDateTime))








































console.log("Лиза не бей и не снимай жизни, ты лапочка 🥰")