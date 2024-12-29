#!/usr/bin/env python3
"""NoSQL"""
from pymongo import MongoClient

def list_all(mongo_collection):
    """lists all documents in a collection"""
    result = []
    for i in mongo_collection.find():
        result.append(i)

    return result
