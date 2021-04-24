import { Button } from '@material-ui/core';
import React from 'react'

export const paginate = (array, page_size, page_number) => array.slice((page_number - 1) * page_size, page_number * page_size);

export const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumber = []
    for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <div>
            {
                pageNumber.map(page => (
                    <Button
                        key={page}
                        onClick={() => paginate(page + 1)}
                        color="primary"
                        variant="contained"
                        style={{ margin: 5 }}
                    >
                        {page + 1}
                    </Button>
                ))
            }
        </div>
    )
}