#!/usr/bin/env python3
"""This module demonstrates the basics of
Async Comprehension."""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Uses async comprehension to collect 10 random numbers."""
    return [_ async for _ in async_generator()]
