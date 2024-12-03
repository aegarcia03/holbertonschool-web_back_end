#!/usr/bin/env python3
"""This module demonstrates the basics of asynchronous
programming using asyncio."""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Returns an asyncio.Task object wrapping
    the wait_random coroutine."""
    return asyncio.create_task(wait_random(max_delay))
