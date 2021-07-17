
CREATE TABLE IF NOT EXISTS reviews (id serial unique primary key, product_id integer, rating integer, add_date timestamp, summary varchar(60), body varchar(1000), recommended boolean, reported boolean, reviewer_name varchar(40), reviewer_email varchar(40), response varchar(500), helpfulness integer);

CREATE TABLE reviews_photos (id serial unique primary key, review_id integer, photo_url varchar(2000), FOREIGN KEY(review_id) REFERENCES reviews(id));

CREATE TABLE characteristics (id serial unique primary key, product_id integer, characterisitc_name varchar(50));

CREATE TABLE characteristics_reviews (id serial unique primary key, characteristic_id integer, review_id integer, characteristic_value integer, FOREIGN KEY(review_id) REFERENCES reviews(id), FOREIGN KEY(characteristic_id) REFERENCES characteristics(id));