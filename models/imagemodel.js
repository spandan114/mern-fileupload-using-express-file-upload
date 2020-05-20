const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  address: {
    type: String,
  } ,
  registered_data: {
      type: Date,
      default: Date.now
  },
  address_id:{
      type:String,
      unique:true
  }
});

module.exports = Image = mongoose.model("image", ImageSchema);