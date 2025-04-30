#!/usr/bin/env python3
"""Module commented"""


from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]: # type: ignore
    """Returns a yield with a random number between 0 and 10"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
