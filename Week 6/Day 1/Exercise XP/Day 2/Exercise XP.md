{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Exercise 1\
\
select * from items order by price ASC;\
select * from items where price >= 80 order by price desc;\
select first_name,last_name \
from customers where user_id<4 order by first_name asc;\
select last_name from customers order by last_name desc\
\
CREATE TABLE purchases (customer_id INTEGER, item_id INTEGER, \
						FOREIGN KEY (customer_id) \
						REFERENCES customers (user_id), \
						FOREIGN KEY (item_id) \
						REFERENCES items (user_id));\
\
\
insert into purchases(customer_id, item_id) values (1,2);\
\
SELECT\
    *\
FROM\
    purchases\
INNER JOIN items\
    ON user_id = item_id;\
\
Exercise 2\
\
	\
select address, district, phone\
	from address\
	where district='Texas';\
	\
select *\
	from film\
	where film_id\
	between 15 and 150;\
	\
select film_id, title, description, film.length, rental_rate \
	from film \
	where title = 'Amazing Spiderman';\
\
select film_id, title, description, film.length, rental_rate \
	from film \
	where title \
	like 'Am%';\
	\
select title,rental_rate \
	from film \
	order by replacement_cost < 5\
	Asc limit 10;\
	\
select customer.customer_id, \
	first_name, last_name, \
	amount, payment_date\
	from customer \
	inner join payment\
	on customer.customer_id = payment.customer_id\
	order by customer.customer_id}