
CREATE TABLE notes(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    important INT NOT NULL,
    created_user INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY(created_user) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY(important) REFERENCES important(id) ON UPDATE CASCADE,
    PRIMARY KEY(id)
);

ALTER TABLE notes DROP FOREIGN KEY notes_ibfk_1;

ALTER TABLE notes DROP FOREIGN KEY(created_at) REFERENCES user(id);

ALTER TABLE notes ADD FOREIGN KEY(created_user) REFERENCES user(id) ON DELETE CASCADE;

ALTER TABLE notes ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;