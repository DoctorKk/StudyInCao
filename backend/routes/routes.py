from flask import Blueprint
from flask_restful import Api
from resources import auth, user

routes = Blueprint('routes', __name__)

api = Api(routes)

api.add_resource(auth.Login, '/login')
api.add_resource(auth.ForgotPassword, '/forgot_password')
api.add_resource(auth.ResetPassword, '/reset_password')

api.add_resource(user.AllUser, '/user')
api.add_resource(user.User, '/user/<string:user_id>')
api.add_resource(user.Password, '/user/<string:user_id>/password')
api.add_resource(user.CardID, '/user/<string:user_id>/card_id')
