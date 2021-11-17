const router = require("express").Router();

const charAPI = require("../serveices/APIHandler")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/characters", (req, res)=>{
  charAPI.getFullList()
  .then(characters=>res.render("index", {characters}))
})

module.exports = router;
