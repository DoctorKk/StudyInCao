from flask import g
from flask_httpauth import HTTPTokenAuth
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

SECRET_KEY = 'yuanhaoran0318'

serializer = Serializer(SECRET_KEY, expires_in=600)
login_auth = HTTPTokenAuth(scheme='Login')
forgot_auth = HTTPTokenAuth(scheme='Forgot')


def create_token(data):
    return serializer.dumps(data)


@login_auth.verify_token
def verify_token(token):
    g.user = None
    try:
        data = serializer.loads(token)
    except:
        return False
    if 'password' in data:
        return True
    return False


@forgot_auth.verify_token
def verify_token(token):
    g.user = None
    try:
        data = serializer.loads(token)
    except:
        return False
    if 'card_id' in data:
        return True
    return False
