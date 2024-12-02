#!/usr/bin/env python3
"""This module demonstrates the basics of asynchronous
programming using asyncio."""
import asyncio
import random
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n, max_delay):
    delays = await asyncio.gather(wait_random(), wait_n())
    return delays
