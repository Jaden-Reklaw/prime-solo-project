
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    email VARCHAR(240) NOT NULL,
    first_name VARCHAR(120) NOT NULL
);

CREATE TABLE speech_info(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	speech_title VARCHAR(100),
	date_created DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	notes TEXT,
	table_topics TEXT,
	speech_eval TEXT,
	speech_type VARCHAR(100),
	min_time INT,
	max_time INT,
	speech_rt INT,
	speech_text TEXT,
	status BOOL DEFAULT 'false',
	and_count INT,
	like_count INT
);

--INSERT STATEMENT TO CREATE A NEW SPEECH
INSERT INTO speech_info(speech_title, user_id, min_time, max_time) VALUES
('self-dev', 1, 5, 7);
INSERT INTO speech_info(speech_title, user_id, min_time, max_time) VALUES
('halo', 1, 6, 10);
INSERT INTO speech_info(speech_title, user_id, min_time, max_time) VALUES
('family-talk', 1, 5, 10);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    email VARCHAR(240) NOT NULL,
    first_name VARCHAR(120) NOT NULL
);

CREATE TABLE speech_info(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES "user",
	speech_title VARCHAR(100),
	date_created DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	notes TEXT,
	table_topics TEXT,
	speech_eval TEXT,
	speech_type VARCHAR(100) DEFAULT 'debate',
	min_time INT,
	max_time INT,
	speech_rt INT,
	speech_text TEXT,
	status BOOL DEFAULT 'false',
	and_count INT,
	like_count INT,
	in_time BOOLEAN;
);
