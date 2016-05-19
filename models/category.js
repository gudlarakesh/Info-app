var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model("Category", categorySchema);

// get all articles

module.exports.getCategories = function(callback){
  Category.find(callback);
}

// gret article by ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

// get category articles
module.exports.getArticleByCategory = function(category, callback){
  var query = {category: category};
  Article.find(query, callback);
}

// gret article by ID
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}

// update an article
module.exports.updateCategory = function(id, data, callback){
  var title = data.name;
  var body  = data.description;

  var query = {_id : id};

  Category.findById(id, function(err, category){
    if(!category){
        return next(new Error, "could no")
    }
    else {
      category.name  = title;
      category.description = body;

      category.save(callback);
    }
  })
}

// remove an category

module.exports.removeCategory = function(id, callback){
  Category.find({_id:id}).remove(callback);
}