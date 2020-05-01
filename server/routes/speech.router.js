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
                        WHERE user_id = $1 AND status = FALSE
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
router.post('/new_speech', (req, res) => {
    const user_id = req.body.user_id;
    const speech_title = req.body.newSpeech.speech_title;
    const min_time = req.body.newSpeech.min_time;
    const max_time = req.body.newSpeech.max_time;

    //Add new speech to the speech_info table
    const queryText = `
                        INSERT INTO speech_info(speech_title, user_id, min_time, max_time) VALUES
                        ($1, $2, $3, $4);`;
    pool.query(queryText,[speech_title, user_id, min_time, max_time]).then((result) => {
            res.sendStatus(201);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });

});

/**
 * DELETE route uses DELETE SQL
 */
router.delete('/delete/:id', (req, res) => {
    let speech_id = req.params.id;
    console.log('speech id is', speech_id);

    //Deletes a speech from the speech_info table
    const queryText = `DELETE FROM speech_info WHERE id = $1;`;
    pool.query(queryText,[speech_id]).then((result) => {
            res.sendStatus(202);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * PUT route uses UPDATE SQL
 * NOTES
 */
router.put('/notes/:id', (req, res) => {
    let notes = req.body.notes;
    let speech_id = req.params.id;

    //Updates the speech_info table on the notes field
    const queryText = `
                        UPDATE speech_info 
                        SET notes = $1
                        WHERE id = $2;`;
    pool.query(queryText,[notes,speech_id]).then((result) => {
            res.sendStatus(204);
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

    //Updates the speech_info table on the table_topics field
    const queryText = `
                        UPDATE speech_info 
                        SET table_topics = $1
                        WHERE id = $2;`;
    pool.query(queryText,[table_topics,speech_id]).then((result) => {
            res.sendStatus(204);
        }).catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;