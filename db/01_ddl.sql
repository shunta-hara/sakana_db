
DROP TABLE IF EXISTS mid_release_song;
DROP TABLE IF EXISTS m_song;
DROP TABLE IF EXISTS m_release;
DROP TABLE IF EXISTS m_composer;
DROP TABLE IF EXISTS m_lyricist;

CREATE TABLE m_composer (
    composer_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE m_lyricist (
    lyricist_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE m_song (
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    song_title VARCHAR(255) NOT NULL,
    duration VARCHAR(8) NOT NULL,
    composer_id INT NOT NULL,
    lyricist_id INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (composer_id) REFERENCES m_composer(composer_id),
    FOREIGN KEY (lyricist_id) REFERENCES m_lyricist(lyricist_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE TABLE m_release (
    release_id INT PRIMARY KEY AUTO_INCREMENT,
    release_title VARCHAR(255) NOT NULL,
    release_date DATE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE TABLE mid_release_song (
    release_id INT,
    song_id INT,
    `order` INT DEFAULT 1,
    PRIMARY KEY (release_id, song_id),
    FOREIGN KEY (release_id) REFERENCES m_release(release_id),
    FOREIGN KEY (song_id) REFERENCES m_song(song_id)
) CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
