import { createContext, useState } from "react";


const BookCtx = createContext()

function BookProvider({ children }) {
    const [booksLst, setBooksLst] = useState([])

    const logAllBooks = (booklist) => {
        if (booksLst.length < 1) {
            console.log(booklist)
        } else {
            console.log("No Books available!")
        }
    }

    const logBookAtIndex = (index) => {
        if (booksLst.length < 1) {
            console.log(booksLst[index])
        } else {
            console.log("No Books available!")
        }

    }

    const logLastBook = () => {
        if (booksLst.length < 1) {
            console.log(booksLst[booksLst.length - 1])
        } else {
            console.log("No Books available!")
        }

    }

    const logFirstBook = () => {
        if (booksLst.length < 1) {
            console.log(booksLst[0])
        } else {
            console.log("No Books available!")
        }

    }

    const setBooksText = (bookList) => {
        setBooksLst(bookList)
        console.log(booksLst)
    }

    const ctxActions = {
        logAllBooks,
        logBookAtIndex,
        logFirstBook,
        logLastBook,
        setBooksText
    }
    return (
        <BookCtx.Provider value={ctxActions}>
            {children}
        </BookCtx.Provider>
    )
}

export { BookProvider }
export default BookCtx