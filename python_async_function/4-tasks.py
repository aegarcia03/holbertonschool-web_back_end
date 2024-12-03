#!/usr/bin/env python3
"""This module demonstrates the basics of asynchronous
programming using asyncio."""
import asyncio
import random
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Returns the list of delays sorted in ascending order."""
    tasks = []
    delays = []
    for x in range(n):
        tasks.append(task_wait_random(max_delay))

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays