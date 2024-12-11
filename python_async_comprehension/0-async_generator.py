#!/usr/bin/env python3
"""This module demonstrates the basics of
Async Comprehension."""
import random
import asyncio
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """Defines a coroutine that loops 10 times"""
    for i in range(10):
        await asyncio.sleep(1)

        yield (random.uniform(0, 10))
