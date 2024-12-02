#!/usr/bin/env python3
"""This module uses type annotations."""
from typing import Union, Optional, Tuple


def to_kv(k: str, v: (int, float)) -> Tuple[Union[str, float]]:
    """Retunrs a tuple"""
    square = float(v ** 2)
    return (k, square)