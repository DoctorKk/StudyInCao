import hashlib
from .code import CODE_MSG_MAP
import json


def pretty_result(code, msg=None, data=None):
    if msg is None:
        msg = CODE_MSG_MAP[code]
    return {
        'code': code,
        'msg': msg,
        'data': data
    }


def hash_md5(password):
    md5 = hashlib.md5()
    md5.update(password.encode('utf-8'))
    return md5.hexdigest()


class MyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, bytes):
            return str(obj, encoding='utf-8')
        return json.JSONEncoder.default(self, obj)