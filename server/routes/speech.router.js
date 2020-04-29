const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
//Route for all the speech sp
router.get('/user', (req, res) => {
    console.log('query is:',req.query);
    //query is the user id
    let user_id = req.query.q;

    // returns all speech associated with the user_id
    const queryText = `SELECT * FROM speech_info WHERE user_id = $1;`;
    pool.query(queryText,[user_id]).then((result) => {
            res.send(result.rows);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;