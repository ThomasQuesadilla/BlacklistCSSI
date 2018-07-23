#This is the pending source code for our final project.
import webapp2

from google.appengine.api import users
from google.appengine.api import memcache

class MainPage(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        nickname = None
        logout = None
        if user:
            nickname = user.nickname()
            logout = users.create_logout_url('/')
            greeting = 'Welcome, {}! (<a href="{}">sign out</a>)'.format(
                nickname, logout_url)
        else:
            self.redirect(users.create_login_url())
            
      
            
class LoginHandler(webapp2.RequestHandler):
    def get(self):
        error = self.request.get('error')
        self.response.write(content.render(error=error))
        
    def post(self):
        username = self.request.get('username')
        password = self.request.get('password')
        


app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/login', LoginHandler),
],  debug=True)
