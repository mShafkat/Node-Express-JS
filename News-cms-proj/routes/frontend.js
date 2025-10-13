const express = require('express');
const router = express.Router();

// import controller
const sitecontroller = require('../controllers/sitecontroller');

router.get('/',sitecontroller.index);
router.get('/category/:name',sitecontroller.articlesByCategory);
router.get('/single/:id',sitecontroller.singleArticle);
router.get('/single/:name',sitecontroller.author);
router.post('/single/:id',sitecontroller.addComment);

module.exports = router;