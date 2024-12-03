#!/usr/bin/env python3
"""This module demonstrates the basics of asynchronous
programming using asyncio."""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the runtime of wait_n and return the average time per task."""
    start_time = time.time()  # Record the start time
    asyncio.run(wait_n(n, max_delay))  # Run the wait_n coroutine
    end_time = time.time()
    total_time = end_time - start_time

    return total_time / n
