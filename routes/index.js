var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  });
});
module.exports = router;

/*POST the form data*/
router.post('/', function (req, res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})

function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("");
  if (phrase.toLowerCase().replace(" ", "") === temp.toLowerCase().replace(" ", "") ){
    return true
  }
  else{
    return false
  }
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)){
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}