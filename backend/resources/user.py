from flask import request
from flask_restful import Resource
from sqlalchemy.exc import SQLAlchemyError
from models import db
from models.user import UserModel
from common import code, hash_md5, pretty_result, login_auth, forgot_auth


class AllUser(Resource):
    decorators = [login_auth.login_required]

    def get(self):
        try:
            users = UserModel.query.all()
            data = [
                {
                    'user_id': user.user_id,
                    'card_id': user.card_id,
                    'create_time': user.create_time.strftime("%Y-%m-%d %H:%M:%S"),
                    'update_time': user.update_time.strftime("%Y-%m-%d %H:%M:%S")
                }
                for user in users
            ]
            return pretty_result(code.OK, data=data)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class User(Resource):
    method_decorators = {
        'post': [login_auth.login_required],
        'delete': [login_auth.login_required]
    }

    def get(self, user_id):
        try:
            user = UserModel.query.get(user_id)
            data = {
                    'user_id': user.user_id,
                    'card_id': user.card_id,
                    'create_time': user.create_time.strftime("%Y-%m-%d %H:%M:%S"),
                    'update_time': user.update_time.strftime("%Y-%m-%d %H:%M:%S")
            }
            return pretty_result(code.OK, data=data)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)

    def post(self, user_id):
        try:
            data = request.get_json(silent=True)
            user = UserModel(user_id=user_id, password=hash_md5(data['card_id'][-6:]), card_id=data['card_id'])
            db.session.add(user)
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)

    def delete(self, user_id):
        try:
            user = UserModel.query.get(user_id)
            db.session.delete(user)
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class Password(Resource):
    decorators = [forgot_auth.login_required]

    def put(self, user_id):
        try:
            data = request.get_json(silent=True)
            user = UserModel.query.get(user_id)
            user.password = hash_md5(data['password'])
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class IDCard(Resource):
    decorators = [login_auth.login_required]

    def put(self, user_id):
        try:
            data = request.get_json(silent=True)
            user = UserModel.query.get(user_id)
            user.card_id = data['card_id']
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError:
            db.session.rollback()
            return pretty_result(code.DB_ERROR)
