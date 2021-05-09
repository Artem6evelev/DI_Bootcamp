{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa320\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 CREATE TABLE students ( id serial PRIMARY KEY, first_name varchar (50) NOT NULL, last_name varchar (50) NOT NULL, birth_date date NOT NULL );\
INSERT INTO students (first_name,last_name,birth_date) VALUES ('Marc','Benichou','1998-11-02'), ('Yoan','Cohen','2010-12-03'), ('Lea','Benichou','1987-07-27'), ('Amelia','Dux','1996-04-07'), ('David','Grez','2003-06-14'), ('Omer','Simpson','1980-10-03');\
INSERT INTO students (first_name,last_name,birth_date) VALUES ('Marc','Soussand','1983-09-16');\
\pard\pardeftab720\partightenfactor0
\cf2 \
\
\
SELECT * FROM student;\
SELECT first_name,last_name FROM students WHERE id=2;\
SELECT first_name,FROM students WHERE last_name='Benichou' AND first_name='Marc';\
SELECT first_name,last_name FROM students WHERE first_name LIKE '%a%';\
SELECT first_name,last_name FROM students WHERE first_name LIKE 'a%';\
SELECT first_name,last_name FROM students WHERE first_name LIKE '%a';\
SELECT first_name,last_name FROM students WHERE first_name LIKE '%a_';\
SELECT first_name,last_name FROM students WHERE id=1 AND id=3;\
SELECT first_name,last_name,birth_date FROM students WHERE birth_date>='2000-01-01';}