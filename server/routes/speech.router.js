const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route uses SELECT SQL
 */
//Route for all the speech sp
router.get('/user', (req, res) => {
    console.log('query is:',req.query);
    //query is the user id
    let user_id = req.query.q;

    // returns all speech associated with the user_id
    const queryText = `
                        SELECT * FROM speech_info 
                        WHERE user_id = $1
                        ORDER BY id;`;
    pool.query(queryText,[user_id]).then((result) => {
            res.send(result.rows);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * POST route uses INSERT INTO
 */
router.post('/', (req, res) => {

});

/**
 * PUT route uses UPDATE SQL
 * NOTES
 */
router.put('/notes/:id', (req, res) => {
    let notes = req.body.notes;
    let speech_id = req.params.id;

    const queryText = `
                        UPDATE speech_info 
                        SET notes = $1
                        WHERE id = $2;`;
    pool.query(queryText,[notes,speech_id]).then((result) => {
            res.sendStatus(200);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * PUT route uses UPDATE SQL
 * TABLE TOPICS
 */
router.put('/table_topic/:id', (req, res) => {
    let table_topics = req.body.table_topics;
    let speech_id = req.params.id;
    console.log('table topic is',req.body);

    const queryText = `
                        UPDATE speech_info 
                        SET table_topics = $1
                        WHERE id = $2;`;
    pool.query(queryText,[table_topics,speech_id]).then((result) => {
            res.sendStatus(200);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;