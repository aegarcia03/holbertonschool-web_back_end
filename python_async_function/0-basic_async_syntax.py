#!/usr/bin/env python3
"""This module demonstrates the basics of asynchronous
programming using asyncio."""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay seconds,
     then return the delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
