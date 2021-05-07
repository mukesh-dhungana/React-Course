import React from 'react';
import { BookConsumer } from "./bookContext";

function Book() {
    
    return (
       <>
       <h2>Book lIST</h2>
        <BookConsumer>
            {
                (value) => {
                   return value?.books?.map(item=><li key={item.id}>{item.name}</li>)
                }
            }
        </BookConsumer>
       </>
    )
}

export default Book;
