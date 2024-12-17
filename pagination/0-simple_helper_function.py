#!/usr/bin/env python3
"""This module works pagination"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int]:
    """Returns the range of indexes for a particular
    pagination parameters"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return [start_index, end_index]
