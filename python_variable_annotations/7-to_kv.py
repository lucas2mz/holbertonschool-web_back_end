#!/usr/bin/env python3
"""Module python3"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[int, float]:
    """
    Returns a tuple
    """
    return (k, float(v ** 2))
