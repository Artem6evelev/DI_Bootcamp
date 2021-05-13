{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Exercise XP\
\
-- 1\
SELECT first_name, last_name\
	FROM employees;\
	\
-- 2\
SELECT department_id\
	FROM employees;\
	\
-- 3\
SELECT *\
	FROM employees\
	ORDER BY first_name\
	DESC;\
	\
-- 4\
SELECT first_name, last_name, salary, ROUND(salary * 0.15, 0)\
	AS PF \
	FROM employees;\
	\
-- 5\
SELECT employee_id, first_name, last_name, salary\
	FROM employees\
	ORDER BY salary asc;\
	\
-- 6\
SELECT SUM (salary)\
	FROM employees;\
	\
-- 7\
SELECT MAX(salary),MIN(salary)\
	FROM employees;\
	\
-- 8\
SELECT ROUND(AVG(salary))\
	FROM employees;\
\
-- 9\
SELECT COUNT(employee_id)\
	FROM employees;\
	\
-- 10\
SELECT UPPER(first_name)\
	FROM employees;\
	\
-- 11\
SELECT SUBSTRING(first_name, 1,3)\
	FROM employees;\
	\
-- 12\
SELECT first_name||' '||last_name "Full Name" \
	FROM employees;\
	\
SELECT concat(first_name,' ', last_name) "Full Name"\
	FROM employees;\
\
-- 13\
SELECT first_name, last_name,\
	LENGTH(first_name||' '||last_name) "First name + Last name Length"\
	FROM employees;\
\
-- 14\
SELECT first_name\
	FROM employees\
	WHERE first_name \
	LIKE '%[0-9]%';\
	\
-- 15\
SELECT first_name\
	FROM employees\
	LIMIT 10;\
	\
-- Restricting and Sorting\
-- 1\
SELECT first_name, last_name, salary\
	FROM employees\
	WHERE salary\
	BETWEEN 10000 and 15000;\
	\
-- 2\
SELECT first_name, last_name, hire_date\
	FROM employees\
	WHERE hire_date BETWEEN '1987-01-01' and '1987-12-31';\
	\
SELECT first_name, last_name, hire_date\
	FROM employees\
	WHERE date_part('year', hire_date) = 1987 ;\
	\
-- 3\
SELECT first_name \
	FROM employees\
	WHERE first_name\
	LIKE '%c%' \
	AND first_name\
	LIKE '%e%';\
	\
-- 4\
SELECT last_name, job_title, salary\
	FROM employees\
	JOIN jobs\
	ON jobs.job_id = employees.job_id\
	WHERE job_title\
	NOT LIKE 'Programmer' \
	AND job_title\
	NOT LIKE 'Shipping Clerk'\
	AND employees.salary != 4500\
	AND employees.salary != 10000\
	AND employees.salary != 15000\
	\
-- 5\
SELECT last_name \
	FROM employees \
	WHERE LENGTH(last_name)=6;}