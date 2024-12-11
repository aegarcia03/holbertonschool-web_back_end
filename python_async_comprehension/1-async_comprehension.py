#!/usr/bin/env python3
"""This module demonstrates the basics of
Async Comprehension."""
import random
import asyncio
from typing import AsyncGenerator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    return [_ async for _ in async_generator()]
