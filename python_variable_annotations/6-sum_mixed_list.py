#!/usr/bin/env python3
"""This module uses type annotations."""
from typing import List, Union, Optional


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of the elements as a float"""
    result = sum(mxd_lst)
    return result
