const express = require('express');
const router = express.Router();
const data = require('../data');
const searchData = data.search;

router.get('/', async(req, res) => {
    try {
        res.status(200).render('home');
    } catch (error) {
        res.status(404).json({ error: e });
    }
})

router.post('/search', async(req, res) => {

    try {
        if (req.body.personName == "") {
            res.status(400).render("error", { errorMsg: "Please enter some value" })
        }
        if (!req.body.personName) {
            res.status(400).render("error", { errorMsg: "Please provide the name" })
        }
        if (typeof(req.body.personName) != 'string') {
            res.status(400).render("error", { errorMsg: "Please provide proper name" })
        }

        let post = await searchData.exportedMethods.searchPersonByName(req.body.personName)
        console.log(post)
        if (post.length == 0) {
            res.render('notFound', { personName: req.body.personName });
        } else {

            res.render('single', { searchDetail: post });
        }


    } catch (e) {
        res.status(400).render("error", { errorMsg: "Please enter correct values" })
    }
});



module.exports = router;