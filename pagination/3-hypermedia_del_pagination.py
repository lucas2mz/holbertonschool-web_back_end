#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a deletion-resilient hypermedia pagination result"""
        assert index is not None and isinstance(index, int)
        indexed_data = self.indexed_dataset()
        assert 0 <= index < len(self.__dataset)

        data = []
        current_index = index
        count = 0

        while (count < page_size and
               current_index < len(self.__dataset) + page_size):
            item = indexed_data.get(current_index)
            if item:
                data.append(item)
                count += 1
            current_index += 1

        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': current_index
        }
