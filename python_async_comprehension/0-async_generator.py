#!/usr/bin/env python3
"""This module demonstrates the basics of
Async Comprehension."""
import random
import asyncio


async def async_generator():
    """Defines a coroutine that loops 10 times"""
    i = random.randint(0, 10)
    for i in range(10):
        await asyncio.sleep(1)

        yield i
