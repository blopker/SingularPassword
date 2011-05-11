#!/usr/bin/python
# This script will make a new sqlite3 database
# for the SingularPassword project.
# It also seeds the DB with the alphabet, upper and lower case.

from sqlite3 import connect
import hashlib
import string 

# Create a new DB if one is not there.
conn = connect('singular.db')
c = conn.cursor()
c.execute('''create table passwords
(hash text primary key, count integer default 0, isdictionary integer)''')
conn.commit()

#Seed the db with the alphabet.
for letter in string.letters:
	letterhash = hashlib.sha1(letter).hexdigest()
	row = (letterhash, 1, 0)
	c.execute('insert into passwords values (?,?,?)', row)

conn.commit()

c.close()
