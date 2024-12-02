#!/usr/bin/env python3
"""This module uses type annotations."""
import math


def floor(n: float) -> int:
    """returns the floor of the float"""
    result = math.trunc(n)
    return result
