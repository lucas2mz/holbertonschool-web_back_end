#!/usr/bin/env python3
"""Module python3"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a number by the multiplier
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
