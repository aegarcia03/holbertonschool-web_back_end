#!/usr/bin/env python3
"""This module works pagination"""
from typing import Tuple, List
import csv
import math


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returns the range of indexes for a particular
    pagination parameters"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Retrieve a page of data from the dataset"""
        assert isinstance(page, int), "page must be an int"
        assert isinstance(page_size, int), "page_size must be an int"
        assert page > 0, "page must be greater than 0"
        assert page_size > 0, "page must be greater than 0"

        data = self.dataset()
        start_idx, end_idx = index_range(page, page_size)
        if start_idx > len(data):
            return []
        else:
            return data[start_idx:end_idx]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns a dictionary containing metadata about
        the pagination state"""

        data_dict = self.get_page(page, page_size)
        total_pages = math.ceil(len(self.dataset()) / page_size)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": page_size,
            "page": page,
            "data": data_dict,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages,
        }
