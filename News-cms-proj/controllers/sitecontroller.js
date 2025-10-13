const mongoose = require('mongoose');

const CategoryModel = require('../models/category');
const NewsModel = require('../models/news');
const UserModel = require('../models/user');
const CommentModel = require('../models/comment');

const index = async (req, res) => {
    res.render('index');
}
const articlesByCategory = async (req, res) => {
    res.render('category');
}
const singleArticle = async (req, res) => {
    res.render('single');
}
const search = async (req, res) => {
    res.render('search');
}
const author = async (req, res) => {
    res.render('author');
}
const addComment = async (req, res) => {
   
}

module.exports = {
    index,
    articlesByCategory,
    singleArticle,
    search,
    author,
    addComment
};
