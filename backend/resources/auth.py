import json
from flask import request
from flask_restful import Resource
from flask_restful.reqparse import RequestParser
from sqlalchemy.exc import SQLAlchemyError
from models import db
from models.user import UserModel
from common import code, hash_md5, pretty_result, create_token, MyEncoder


class Login(Resource):
    def __init__(self):
        self.parser = RequestParser()

    def post(self):
        self.parser.add_argument('user_id', type=str, location="args", default='0000000000')
        self.parser.add_argument('password', type=str, location="args", default='0000000000')
        args = self.parser.parse_args()
        print(args)

        try:
            user = UserModel.query.get(args['user_id'])
            print(user.password)
            print(hash_md5(args['password']))
            if user.password == hash_md5(args['password']):
                token = json.dumps(create_token({'password': user.password}), cls=MyEncoder)
                print(token)
                return pretty_result(code.OK, data=token)
            else:
                return pretty_result(code.AUTHORIZATION_ERROR)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class ForgotPassword(Resource):
    def post(self):
        try:
            data = request.get_json(silent=True)
            user = UserModel.query.get(data['user_id'])
            if user.card_id == data['card_id']:
                token = create_token({'card_id': user.card_id})

                return pretty_result(code.OK, data=token)
            else:
                return pretty_result(code.AUTHORIZATION_ERROR)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)
