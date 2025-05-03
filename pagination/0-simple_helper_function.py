#!/usr/bin/env python3
"""
Python3 module
"""


def index_range(page: int, page_size: int) -> tuple:
    """Returns a tuple with an start index and an end index"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
