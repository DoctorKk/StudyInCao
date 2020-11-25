import datetime
from . import db


class UserModel(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.String(10), primary_key=True)
    password = db.Column(db.String(32))
    card_id = db.Column(db.String(45))
    create_time = db.Column(db.DATETIME(6), default=datetime.datetime.now)
    update_time = db.Column(db.DATETIME(6), default=datetime.datetime.now, onupdate=datetime.datetime.now)
