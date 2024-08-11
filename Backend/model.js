const mongoose=require('mongoose');
const blogSchema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});const blog=mongoose.model('product',blogSchema);
module.exports=blog;

