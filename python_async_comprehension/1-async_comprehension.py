#!/usr/bin/env python3
"""Module commented"""


from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """A list of 10 random float numbers"""
    return [i async for i in async_generator()]
