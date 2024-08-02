// const getPosts = (req,res)=>{
//     res.send("Hello world from node.js");
// };

// module.exports = {
//     getPosts
// };

// exports.getPosts = (req,res)=>{
//     res.send("Hello world from node.js");
// };

const express=require('express') 
const postContollers = require('../controllers/post')

const router = express.Router()

router.get('/',postContollers.getPosts)

module.exports = router;