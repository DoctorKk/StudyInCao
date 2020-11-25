from flask import Blueprint
from flask_restful import Api
from resources import auth, user

routes = Blueprint('routes', __name__)

api = Api(routes)

api.add_resource(auth.Login, '/login')
api.add_resource(auth.ForgotPassword, '/ForgotPassword')

api.add_resource(user.AllUser, '/user')
api.add_resource(user.User, '/user/<int:user_id>')
api.add_resource(user.Password, '/user/password/<int:user_id>')
api.add_resource(user.IDCard, '/user/id_card/<int:user_id>')
