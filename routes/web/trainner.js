var express = require("express")
const  ensureTrainner = require("../../auth/auth").ensureTrainner

var router = express.Router()

router.use(ensureTrainner)

router.get("/", function(req,res){
    res.render("trainner/train")
 })

module.exports = router