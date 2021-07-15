CREATE TABLE characteristics (
 ID int(1) NOT NULL AUTO_INCREMENT,
 characteristic_name VARCHAR(10),
 product_id int,
 PRIMARY KEY (id));

CREATE TABLE characteristics_reviews (
 ID int(1) NOT NULL AUTO_INCREMENT,
 review_id int,
 characteristic_id int,
 characteristic_value TINYINT,
 PRIMARY KEY (id),
 FOREIGN KEY(review_id) REFERENCES reviews(ID),
 FOREIGN KEY(characteristic_id) REFERENCES characteristics(ID));


CREATE TABLE review_photos (
 ID int(1) NOT NULL AUTO_INCREMENT,
 review_id int,
 photo_url VARCHAR(200),
 PRIMARY KEY (id),
 FOREIGN KEY(review_id) REFERENCES reviews(ID));