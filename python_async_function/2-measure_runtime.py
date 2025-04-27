#!/usr/bin/env python3
"""Python3 module"""


wait_n = __import__('1-concurrent_coroutines').wait_n
import asyncio
import time


def measure_time(n: int, max_delay: int) -> float:
    """Measure total execution time and return average time per task"""
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total = end - start
    return total / n
