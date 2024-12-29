#!/usr/bin/env python3
"""NoSQL"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """Changes all topics of a document based on the name"""
    mongo_collection.update_many(
        { 'name': name },
        { '$set': { 'topics': topics }}
    )
