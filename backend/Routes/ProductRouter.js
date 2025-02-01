const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Mobile Phone",
            price: 100000
        },
        {
            name: "IPhone",
            price: 1200000
        }
    ])
});

module.exports = router;