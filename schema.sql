
CREATE TABLE IF NOT EXISTS reviews (id serial unique primary key, product_id integer, rating integer, add_date BIGINT, summary varchar(200), body varchar(1000), recommended boolean, reported boolean, reviewer_name varchar(40), reviewer_email varchar(40), response varchar(500), helpfulness integer);

CREATE TABLE reviews_photos (id serial unique primary key, review_id integer, photo_url varchar(2000), FOREIGN KEY(review_id) REFERENCES reviews(id));

CREATE TABLE characteristics (id serial unique primary key, product_id integer, characterisitc_name varchar(50));

CREATE TABLE characteristics_reviews (id serial unique primary key, characteristic_id integer, review_id integer, characteristic_value integer, FOREIGN KEY(review_id) REFERENCES reviews(id), FOREIGN KEY(characteristic_id) REFERENCES characteristics(id));

\COPY reviews FROM './data/reviews.csv' DELIMITER ',' CSV HEADER;

\COPY reviews_photos FROM './data/reviews_photos.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics FROM './data/characteristics.csv' DELIMITER ',' CSV HEADER;

\COPY characteristics_reviews FROM './data/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE reviews ALTER COLUMN add_date TYPE TIMESTAMP USING to_timestamp(add_date/1000);