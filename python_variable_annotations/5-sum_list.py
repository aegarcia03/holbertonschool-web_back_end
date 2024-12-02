#!/usr/bin/env python3
"""This module uses type annotations."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns the sum of the items of the list"""
    total = sum(input_list)
    return total
