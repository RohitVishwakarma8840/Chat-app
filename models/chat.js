const mongoose= require("mongoose");

// chat model from id to message  created 
// so from to message all are type of string 
// created is a type of date 

const chatSchema= new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true

    },
    msg:{
        type:String 
    },
    created_at:{
        type: Date,
        required: true
    },
})

const Chat=mongoose.model("Chat",chatSchema);

module.exports = Chat;
