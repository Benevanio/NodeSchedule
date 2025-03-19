const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const ArticleModel = require('./model/article');


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));

const Article = mongoose.model('Article',  ArticleModel);

const article = new Article({
    title: 'Desenvolvimento com  o C#',
    autor: 'benevanio',
    body: 'Aprenda a desenvolver com o C#',
    special: true
});

//delete one article

Article.findByIdAndDelete("67db55a33c6366ebc4a679e5")
    .then(() => console.log('Article deleted'))
    .catch(err => console.log(err));

//update one article
Article.updateOne({ title: 'Desenvolvimento com  o C#' }, { title: 'Desenvolvimento com  o C# 2' })
    .then(() => console.log('Article updated'))
    .catch(err => console.log(err));
//get all articles

Article.find()
    .then(articles => console.log(articles))
    .catch(err => console.log(err));

article.save()
    .then(() => console.log('Article saved'))
    .catch(err => console.log(err));


app.listen(3000, () => {
    console.log('Server is running');
})
