const express = require('express');
const router = express.Router();
const data = require('../data');
const detailsData = data.details;

router.get('/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        if (!req.params.id) {
            res.status(400).render("error", { errorMsg: "Something wrong with parameters" })
        }
        if (isNaN(req.params.id)) {
            res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        }
        if (((req.params.id) < 1) || ((req.params.id) > 500)) {
            res.status(400).render("error", { errorMsg: "Please provide a proper id" })
        }

        const post = await detailsData.getPersonById(req.params.id);
        // res.render('posts/single', { details: post });
        // res.render(post)
        console.log(post)
        res.render('details', { searchDetail: post });
    } catch (e) {
        res.status(400).json({ error: e });
    }
});




module.exports = router;