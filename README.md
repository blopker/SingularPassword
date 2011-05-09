SingularPassword.com
====================

This is the source code for SingularPassword.com

Dependencies
------------
The only dependency right now is the python powered Tornado server.

To install Tornado (linux only) type:

	sudo apt-get install python-pycurl
	pip install tornado

Go to http://www.tornadoweb.org/documentation#download-and-install for more information.

Also, you need python 2.6+

Usage
-----
Create a new database with:

	python DatabaseSetup.py
 
Then just start the server with:

	python SingularPassword.py

Go to http://localhost:8888 to use it!
