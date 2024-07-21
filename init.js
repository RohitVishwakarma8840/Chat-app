const mongoose= require("mongoose");

const Chat =require("./models/chat.js");


main()
.then((res)=>{
    console.log(res);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats=[
    {
    from:"logan",
     to : "emily",
     msg: "hi logan",
     created_at : new Date()
 },

 {
    from:"rohit",
     to : "rover",
     msg: "hi rover",
     created_at : new Date()
 },

 {
    from:"jake",
     to : "mike tyson",
     msg: "send me your notes",
     created_at : new Date()
 },



];

Chat.insertMany(allChats);

 
