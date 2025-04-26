#!/usr/bin/env python3
"""Module python3"""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples with each iterable and its length
    """
    return [(i, len(i)) for i in lst]
