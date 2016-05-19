var express = require('express');
var router = express.Router();

var Articles = require("../models/article");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Articles.getArticles(function(err, articles){
    if(err){
      console.log(Err);
    }
    res.json(articles);
  })
});

router.get('/:id', function(req, res, next) {
  Articles.getArticleById(req.params.id,function(err, article){
    if(err){
      console.log(Err);
    }
    res.json(article);
  })
});

router.get('/category/:category', function(req, res, next) {
  Articles.getArticleByCategory(req.params.category,function(err, articles){
    if(err){
      console.log(Err);
    }
    res.json(articles);
  })
});
//post article
router.post('/',function(req, res, next){
  //get the form value
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  // set article object

    var newArticle = new Articles({
      title: title,
      category: category,
      body: body
    });

  // create article
    Articles.createArticle(newArticle, function(err, article){
      if(err){
        console.log(err);
      }
      res.location('/articles');
      res.redirect('/articles');
    });
});

//update article

router.put('/:id',function(req, res, next){
  //get the form value
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  }

  // update article
    Articles.updateArticle(id, data, function(err, article){
      if(err){
        console.log(err);
      }
      res.location('/articles');
      res.redirect('/articles');
    });
});

// remove article

router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  Articles.removeArticle(id, function(err, article){
    if(err){
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

module.exports = router;
