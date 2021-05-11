{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Exercise XP\
select name from language;\
\
select \
	language.name \
	from film \
	join language \
	on film.language_id = language.language_id;\
	\
select film.title, description, language.name \
	from film \
	join language \
	on film.language_id = language.language_id;\
	\
select film.title, description, language.name \
	from film \
	full join language \
	on film.language_id = language.language_id;\
	\
create table new_film ( \
	film_id serial \
	PRIMARY KEY, \
	name varchar ( 50 ) \
	UNIQUE NOT NULL\
	);\
	\
INSERT INTO new_film (name) \
VALUES ('Amazing Spiderman'), ('Shrek'), ('Fight Club');\
	\
create table customer_review (\
	review_id INT \
	GENERATED ALWAYS AS IDENTITY, \
	film_id INT, \
	title VARCHAR(50), \
	score smallint, \
	review_text varchar(300), \
	last_update timestamp, \
	PRIMARY KEY(review_id), \
	CONSTRAINT fk_film \
	FOREIGN KEY(film_id) \
	REFERENCES film(film_id) \
	ON DELETE SET NULL \
);\
\
\
insert into customer_review(film_id, title, score, review_text)\
values(1, 'Favourite film', 5, 'bla bla')\
\
select film.title, customer_review.title, score, review_text \
from customer_review\
inner join film\
on film.film_id=customer_review.film_id\
\
select film_id \
	from film \
	inner join customer_review\
	on film_id = film_id;}