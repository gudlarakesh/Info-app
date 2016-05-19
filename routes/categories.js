var express = require('express');
var router = express.Router();

var Category = require("../models/category");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories){
    if(err){
      console.log(Err);
    }
    res.json(categories);
  })
});

router.get('/:id', function(req, res, next) {
  Category.getCategoryById(req.params.id,function(err, category){
    if(err){
      console.log(Err);
    }
    res.json(category);
  })
});

router.post('/',function(req, res, next){
  //get the form value
  var name = req.body.name;
  var description = req.body.description;

  // set category object

    var newCategory = new Category({
      name: name,
      description: description      
    });

  // create category
    Category.createCategory(newCategory, function(err, category){
      if(err){
        console.log(err);
      }
      res.location('/categories');
      res.redirect('/categories');
    });
});

router.put('/:id',function(req, res, next){
  //get the form value
  var id = req.body.id;
  var data = {
    name: req.body.name,
    description: req.body.description
  }

  // update category
    Category.updateCategory(id, data, function(err, category){
      if(err){
        console.log(err);
      }
      res.location('/categories');
      res.redirect('/categories');
    });
});

// remove category

router.delete('/:id', function(req, res, next){
  var id = req.params.id;

  Category.removeCategory(id, function(err, category){
    if(err){
      console.log(err);
    }
    res.location('/categories');
    res.redirect('/categories');
  });
});

module.exports = router;