#!/usr/bin/env python3
"""This module demonstrates the basics of
Async Comprehension."""
import asyncio
from time import perf_counter
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Returns total time it takes async_comprehension to run
    four times in parallel"""
    t1_start = perf_counter()
    await asyncio.gather(async_comprehension())
    t1_stop = perf_counter()
    total = (t1_stop - t1_start)
    return total
