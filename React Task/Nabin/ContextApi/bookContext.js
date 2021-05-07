import React, { createContext } from "react";

const BookContext = createContext();

const BookProvider = BookContext.Provider;
const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };
