{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 OperatorMonoLig-Medium;}
{\colortbl;\red255\green255\blue255;\red235\green236\blue230;\red30\green31\blue41;}
{\*\expandedcolortbl;;\cssrgb\c93725\c94118\c92157;\cssrgb\c15686\c16471\c21176;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Daily Challenge\
\
\pard\pardeftab720\sl360\partightenfactor0

\f1 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 CREATE TABLE purchases (customer_id INTEGER, item_id INTEGER, \cb1 \
\cb3                         FOREIGN KEY (customer_id) \cb1 \
\cb3                         REFERENCES customers (user_id), \cb1 \
\cb3                         FOREIGN KEY (item_id) \cb1 \
\cb3                         REFERENCES items (user_id));\cb1 \
}