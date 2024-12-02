#!/usr/bin/env python3
"""This module uses type annotations."""
from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]): -> List[Tuple[Sequence, int]]:
    """ Takes an iterable of sequence-like items and returns a list of tuples,
    where each tuple contains the sequence and its length."""
    return [(i, Sequence[len(i)]) for i in lst]
