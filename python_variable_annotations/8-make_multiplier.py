#!/usr/bin/env python3
"""This module uses type annotations."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float"""

    def multiply(x: float) -> float:
        return multiplier * x

    return multiply
