const { required } = require("joi");
const User = require("./user.js")
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content:String,
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    created_at:{
        type:Date,
        default:Date.now()

    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})
module.exports = mongoose.model("Review",reviewSchema);