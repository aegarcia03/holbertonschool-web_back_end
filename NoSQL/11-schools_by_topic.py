#!/usr/bin/env python3
"""NoSQL"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """Returns the list of """
    result = []
    for i in mongo_collection.find():
        if 'topics' in i:
            if topic in i['topics']:
                result.append(i)
    return result
