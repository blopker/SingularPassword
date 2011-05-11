#!/usr/bin/python

import os.path
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
from sqlite3 import connect

from tornado.options import define, options

define("port", default=8888, help="run on the given port", type=int)

conn = connect('singular.db')
curs = conn.cursor()
#hashes = conn.execute('select * from passwords').fetchall()


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", MainHandler),
            (r"/newpass", PasswordHandler),
        ]
        settings = dict(
            template_path=os.path.join(os.path.dirname(__file__), "templates"),
            static_path=os.path.join(os.path.dirname(__file__), "static"),
        )
        tornado.web.Application.__init__(self, handlers, **settings)

class MainHandler(tornado.web.RequestHandler):
    @tornado.web.asynchronous
    def get(self):
		self.render('index.html')

class PasswordHandler(tornado.web.RequestHandler):
	def post(self):
		count = len(self.get_argument("hash"))
		response = str(count)
		self.write(response)

def main():
	tornado.options.parse_command_line()
	application = Application()
	http_server = tornado.httpserver.HTTPServer(application)
	http_server.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()
