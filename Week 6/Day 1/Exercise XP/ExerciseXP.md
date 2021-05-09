{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa320\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 CREATE TABLE items ( user_id serial PRIMARY KEY, item_name varchar ( 50 ) UNIQUE NOT NULL, price smallint );\
CREATE TABLE customers ( user_id serial PRIMARY KEY, first_name varchar (50) NOT NULL, last_name varchar (50) NOT NULL );\
INSERT INTO items (item_name, price) VALUES ('Small Desk',100), ('Large Desk',300), ('Fan',80);\
\pard\pardeftab720\sl394\partightenfactor0

\f1\fs27\fsmilli13600 \cf2 \cb1 INSERT INTO \
customers (first_name, last_name)\
\pard\pardeftab720\sa320\partightenfactor0

\f0\fs32 \cf2 \cb3 VALUES ('Greg','Jones'), ('Sandra','Jones'), ('Scott','Scott'), ('Trevor','Green'), ('Melanie','Johnson');\
\pard\pardeftab720\sl394\partightenfactor0

\f1\fs27\fsmilli13600 \cf2 \cb1 SELECT * FROM items;\
SELECT * FROM items;\
SELECT item_name,price FROM items WHERE price > 80;\
SELECT item_name,price FROM items WHERE price<300 ;\
SELECT first_name,last_name FROM customers WHERE last_name ='Smith';\
SELECT first_name,last_name FROM customers WHERE last_name ='Jones';\
SELECT first_name,last_name FROM customers WHERE first_name !='Scott';\
}