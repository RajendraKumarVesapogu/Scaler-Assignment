DROP TABLE IF EXISTS  student;
DROP TABLE IF EXISTS  mentor;

CREATE TABLE
    mentor (
        mentor_id serial PRIMARY KEY,
        mentor_name VARCHAR(255) NOT NULL
    );

-- Mentor table


-- Student table
CREATE TABLE
    student (
        student_id serial PRIMARY KEY,
        student_name VARCHAR(255) NOT NULL,
        viva_marks DECIMAL(5, 2),
        execution_marks DECIMAL(5, 2),
        ideation_marks DECIMAL(5, 2),
        assigned_mentor_id INT,
        total_marks DECIMAL(5, 2),
        is_locked BOOLEAN DEFAULT false,
        is_assigned BOOLEAN DEFAULT false,
        FOREIGN KEY (assigned_mentor_id) REFERENCES mentor (mentor_id)
    );

INSERT INTO
    mentor  (mentor_name)-- not needed when inserting all cols
VALUES
    ('Mentor1'),
    ('Mentor2');

INSERT INTO
    student (student_name) -- not needed when inserting all cols
VALUES
    ('Student1'),
    ('Student2'),
    ('Student3'),
    ('Student4'),
    ('Student5'),
    ('Student6'),
    ('Student7'),
    ('Student8'),
    ('Student9');

SELECT * FROM student;

SELECT * FROM mentor;