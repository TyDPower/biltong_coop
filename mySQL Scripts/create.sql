DROP SCHEMA IF EXISTS biltong_coop;
CREATE SCHEMA biltong_coop;
CREATE TABLE biltong_coop.suppliers(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    supplier_id VARCHAR(255) NOT NULL UNIQUE,
	supplier_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL UNIQUE,
    contact_number VARCHAR(255),
    avalible_for_order BOOLEAN,
    physical_store BOOLEAN,
    online_store BOOLEAN,
    stock_list VARCHAR(255) UNIQUE,
    reviews_list VARCHAR(255) UNIQUE,
    date_joined DATE,
    PRIMARY KEY (supplier_id)
);
    
INSERT INTO biltong_coop.suppliers (
	supplier_id,
	supplier_name,
    contact_name,
    contact_email,
    contact_number,
    avalible_for_order,
    physical_store,
    online_store,
    stock_list,
    reviews_list,
    date_joined
)
VALUES
	("bdd7d035fcc1444f97e0a0bb15a88a51", "Springbok Bokkies", "Marius Erusms", "tyrone.power@live.com", "0899423641155", TRUE, TRUE, FALSE, "STKba4d1c74e3854441a1f80e480f12b19e", "REV9564628e159f48d1b1d43e132d4dad4b", "2021/11/20"),
    ("93ecc940fd03414dad0d085e44d74724", "James McDonald", "James McDonald", "tyronedalepower@gmail.com", "07423641125155", TRUE, FALSE, FALSE, "STK8f33a31bd55f4bf59f41aebe043fa307", "REV8bdbaa7a906040ee998cdd7fb2ff6b5f", "2021/11/21"),
    ("80df9ce7e47940e1b61bfd8cb3ad6bfe", "Koos Combie", "Koos Combie", "contact@typower.tech", "04556423641155", FALSE, FALSE, FALSE, "STK38df7db1457f45ac9690f29bf3274197", "REV4bb11cb288324145b4898ff41a94047d", "2021/11/22");
    
CREATE TABLE biltong_coop.STKba4d1c74e3854441a1f80e480f12b19e(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    stock_name VARCHAR(255) NOT NULL,
    stock_type VARCHAR(255) NOT NULL,
    stock_description VARCHAR(255) NOT NULL,
    stock_avalible BOOLEAN NOT NULL,
    cost_per_kg MEDIUMINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.STKba4d1c74e3854441a1f80e480f12b19e(
	stock_name,
    stock_type,
    stock_description,
    stock_avalible,
    cost_per_kg
)
VALUES
	("Chilli Sticks", "Chilli Sticks", "Biltong sticks spiced with chillies.", TRUE, 59.99),
    ("Traditional Dry Wors", "Dry Wors", "Dried beef mice in casing.", TRUE, 39.99),
    ("Biltong", "Biltong", "Dried and spiced beef.", TRUE, 49.99);

CREATE TABLE biltong_coop.REV9564628e159f48d1b1d43e132d4dad4b(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    customer_comment VARCHAR(255) NOT NULL,
    comment_date DATE NOT NULL,
    num_stars TINYINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.REV9564628e159f48d1b1d43e132d4dad4b(
	customer_name,
    customer_comment,
    comment_date,
    num_stars
)
VALUES
	("Jeffery Larson", "Great product and great service!", "2021/11/25", 5),
    ("The Queen", "Too bad we were kicked out of South Africa, would have loved to steel this recipe.", "2021/11/25", 5),
    ("Tom Currun", "This is to strange for me, I will stick to tea and biskits!", "2021/11/25", 2);

CREATE TABLE biltong_coop.STK8f33a31bd55f4bf59f41aebe043fa307(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    stock_name VARCHAR(255) NOT NULL,
    stock_type VARCHAR(255) NOT NULL,
    stock_description VARCHAR(255) NOT NULL,
    stock_avalible BOOLEAN NOT NULL,
    cost_per_kg MEDIUMINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.STK8f33a31bd55f4bf59f41aebe043fa307(
	stock_name,
    stock_type,
    stock_description,
    stock_avalible,
    cost_per_kg
)
VALUES
	("Chilli Sticks", "Chilli Sticks", "Biltong sticks spiced with chillies.", TRUE, 59.99),
    ("Biltong", "Biltong", "Dried and spiced beef.", TRUE, 35.99);

CREATE TABLE biltong_coop.REV8bdbaa7a906040ee998cdd7fb2ff6b5f(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    customer_comment VARCHAR(255) NOT NULL,
    comment_date DATE NOT NULL,
    num_stars TINYINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.REV8bdbaa7a906040ee998cdd7fb2ff6b5f(
	customer_name,
    customer_comment,
    comment_date,
    num_stars
)
VALUES
	("Johann", "Takes me back to the plaas, can beat oupa's biltong though!", "2021/11/25", 4),
    ("Cathey Booth", "Better than black pudding any day!", "2021/11/25", 4);

CREATE TABLE biltong_coop.STK38df7db1457f45ac9690f29bf3274197(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    stock_name VARCHAR(255) NOT NULL,
    stock_type VARCHAR(255) NOT NULL,
    stock_description VARCHAR(255) NOT NULL,
    stock_avalible BOOLEAN NOT NULL,
    cost_per_kg MEDIUMINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.STK38df7db1457f45ac9690f29bf3274197(
	stock_name,
    stock_type,
    stock_description,
    stock_avalible,
    cost_per_kg
)
VALUES
    ("Traditional Dry Wors", "Dry Wors", "Dried beef mice in casing.", FALSE, 25.99);

CREATE TABLE biltong_coop.REV4bb11cb288324145b4898ff41a94047d(
	ID SMALLINT NOT NULL UNIQUE AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL,
    customer_comment VARCHAR(255) NOT NULL,
    comment_date DATE NOT NULL,
    num_stars TINYINT NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO biltong_coop.REV4bb11cb288324145b4898ff41a94047d(
	customer_name,
    customer_comment,
    comment_date,
    num_stars
)
VALUES
	("Sue", "Great products but never avalible.", "2021/11/25", 3);