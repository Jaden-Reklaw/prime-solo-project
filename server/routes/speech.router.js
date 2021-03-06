const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route uses SELECT SQL
 * all speech specific to one user that aren't finished
 * based off the status field being false
 */
router.get('/user', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});

/**
 * GET route uses SELECT SQL
 * all speech specific to one user that are finished
 * based off the status field being true
 */
//Route for all the speech sp
router.get('/finished/user', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        console.log('finished query is:',req.query);
        //query is the user id
        let user_id = req.query.q;

        //returns all speech associated with the user_id
        const queryText = `
                            SELECT * FROM speech_info 
                            WHERE user_id = $1 AND status = TRUE
                            ORDER BY id;`;
        pool.query(queryText,[user_id]).then((result) => {
                res.send(result.rows);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * GET route uses SELECT SQL
 * returns one speech specific to the id of the speech
 */
//Route for all the speech sp
router.get('/speech', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        console.log('query is:',req.query);
        //query is the user id
        let speech_id = req.query.q;

        // returns one speech associated with speech_info id
        const queryText = `
                            SELECT * FROM speech_info 
                            WHERE id = $1`;
        pool.query(queryText,[speech_id]).then((result) => {
                res.send(result.rows[0]);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});



/**
 * POST route uses INSERT INTO
 */
router.post('/new_speech', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }

});

/**
 * DELETE route uses DELETE SQL
 */
router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route uses UPDATE SQL
 * NOTES
 */
router.put('/notes/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route uses UPDATE SQL
 * TABLE TOPICS
 */
router.put('/table_topic/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route uses UPDATE SQL
 * SPEECH TYPE
 */
router.put('/speech_type/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        let speech_type = req.body.speech_type;
        let speech_id = req.params.id;

        //Updates the speech_info table on the table_topics field
        const queryText = `
                            UPDATE speech_info 
                            SET speech_type = $1
                            WHERE id = $2;`;
        pool.query(queryText,[speech_type,speech_id]).then((result) => {
                res.sendStatus(204);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route uses UPDATE SQL
 * SPEECH EVAL
 */
router.put('/eval/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        let eval = req.body.speech_eval;
        let speech_id = req.params.id;

        //Updates the speech_info table on the table_topics field
        const queryText = `
                            UPDATE speech_info 
                            SET speech_eval = $1
                            WHERE id = $2;`;
        pool.query(queryText,[eval,speech_id]).then((result) => {
                res.sendStatus(204);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * PUT route uses UPDATE SQL
 * FINAL SPEECH UPDATES after end review is clicked
 */
router.put('/review/:id', rejectUnauthenticated, (req, res) => {
    if(req.isAuthenticated()) {
        const speech_rt = req.body.speech_rt;
        const speech_text = req.body.speech_text;
        const and_count = req.body.and_count;
        const like_count = req.body.like_count;
        const in_time = req.body.in_time;
        const status = req.body.status
        const speech_id = req.params.id;
        

        //Updates the speech_info table on the table_topics field
        const queryText = `
                            UPDATE speech_info 
                            SET speech_rt = $1, speech_text = $2, and_count = $3,
                            like_count = $4, in_time = $5, status = $6
                            WHERE id = $7;`;
        pool.query(queryText,[speech_rt, speech_text, and_count, like_count, in_time, status, speech_id]).then((result) => {
                res.sendStatus(204);
            }).catch( (error) => {
                console.log(`Error on query ${error}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;