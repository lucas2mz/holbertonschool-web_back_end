#!/usr/bin/env python3
"""Module commented"""


import asyncio
import time
async_comprehension = __import__('1-async_comprehesion').async_comprehension


async def measure_runtime() -> float:
    """Return the runtime"""
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.perf_counter()
    return end - start
