from flask_restful import Resource
from flask_restful.reqparse import RequestParser
from sqlalchemy.exc import SQLAlchemyError
from models import db
from models.user import UserModel
from common import code, hash_md5, pretty_result
from common.auth import verify_admin_token, verify_user_id_token, verify_modify_password_token


class AllUser(Resource):
    def __init__(self):
        self.token_parser = RequestParser()

    def get(self):
        if verify_admin_token(self.token_parser) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        try:
            users = UserModel.query.all()
            data = [
                {
                    'user_id': user.user_id,
                    'card_id': user.card_id,
                    'is_student': user.is_student,
                    'is_teacher': user.is_teacher,
                    'is_assistant': user.is_assistant,
                    'is_admin': user.is_admin,
                    'create_time': user.create_time.strftime("%Y-%m-%d %H:%M:%S"),
                    'update_time': user.update_time.strftime("%Y-%m-%d %H:%M:%S")
                }
                for user in users
            ]
            return pretty_result(code.OK, data=data)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class User(Resource):
    def __init__(self):
        self.parser = RequestParser()
        self.token_parser = RequestParser()

    def get(self, user_id):
        try:
            user = UserModel.query.get(user_id)
            data = {
                'user_id': user.user_id,
                'is_student': user.is_student,
                'is_teacher': user.is_teacher,
                'is_assistant': user.is_assistant,
                'is_admin': user.is_admin,
                'create_time': user.create_time.strftime("%Y-%m-%d %H:%M:%S"),
                'update_time': user.update_time.strftime("%Y-%m-%d %H:%M:%S")
            }
            return pretty_result(code.OK, data=data)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)

    def post(self, user_id):
        if verify_admin_token(self.token_parser) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        self.parser.add_argument('card_id', type=str, location="args")
        self.parser.add_argument('is_student', type=int, location="args")
        self.parser.add_argument('is_teacher', type=int, location="args")
        self.parser.add_argument('is_assistant', type=int, location="args")
        self.parser.add_argument('is_admin', type=int, location="args")
        args = self.parser.parse_args()

        try:
            user = UserModel(
                user_id=user_id,
                password=hash_md5(args['card_id'][-6:]),
                card_id=args['card_id'],
                is_student=bool(args['is_student']),
                is_teacher=bool(args['is_teacher']),
                is_assistant=bool(args['is_assistant']),
                is_admin=bool(args['is_admin'])
            )
            db.session.add(user)
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)

    def put(self, user_id):
        if verify_admin_token(self.token_parser) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        self.parser.add_argument('card_id', type=str, location="args")
        self.parser.add_argument('is_student', type=int, location="args")
        self.parser.add_argument('is_teacher', type=int, location="args")
        self.parser.add_argument('is_assistant', type=int, location="args")
        self.parser.add_argument('is_admin', type=int, location="args")
        args = self.parser.parse_args()

        try:
            user = UserModel.query.get(user_id)
            user.card_id = args['card_id']
            user.is_student = bool(args['is_student'])
            user.is_teacher = bool(args['is_teacher'])
            user.is_assistant = bool(args['is_assistant'])
            user.is_admin = bool(args['is_admin'])
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)

    def delete(self, user_id):
        if verify_admin_token(self.token_parser) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        try:
            user = UserModel.query.get(user_id)
            db.session.delete(user)
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class Password(Resource):
    def __init__(self):
        self.parser = RequestParser()
        self.token_parser = RequestParser()

    def put(self, user_id):
        if verify_modify_password_token(self.token_parser, user_id) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        self.parser.add_argument('password', type=str, location="args")
        args = self.parser.parse_args()

        try:
            user = UserModel.query.get(user_id)
            user.password = hash_md5(args['password'])
            db.session.commit()
            return pretty_result(code.OK)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)


class CardID(Resource):
    def __init__(self):
        self.token_parser = RequestParser()

    def get(self, user_id):
        if verify_user_id_token(self.token_parser, user_id) is False:
            return pretty_result(code.AUTHORIZATION_ERROR)

        try:
            user = UserModel.query.get(user_id)
            data = {'card_id': user.card_id}
            return pretty_result(code.OK, data=data)
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            return pretty_result(code.DB_ERROR)
