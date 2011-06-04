SingularPassword.com
====================

The goal of this project is to spread secure password techniques.

Dependencies
------------
The only dependency right now is the python powered Tornado server.

To install Tornado (linux only) download [tornado-1.2.1.tar.gz](http://github.com/downloads/facebook/tornado/tornado-1.2.1.tar.gz) then type:

	tar xvzf tornado-1.2.1.tar.gz
	cd tornado-1.2.1
	python setup.py build
	sudo python setup.py install

Go to http://www.tornadoweb.org/documentation#download-and-install for more information.

Also, you need python 2.6+

Usage
-----
Create a new database with:

	python DatabaseSetup.py
 
Then just start the server with:

	python SingularPassword.py

Go to http://localhost:8889 to use it!
