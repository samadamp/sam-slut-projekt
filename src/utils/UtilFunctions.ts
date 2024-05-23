export const pagnationUtil = (books: any[], currentPage: number, booksPerPage: number = 5) => {
    const startIndex = (currentPage - 1) * booksPerPage;
    return books.slice(startIndex, startIndex + booksPerPage);
};

export const getTotalPages = (books: any[], booksPerPage: number = 5) => {
    return Math.ceil(books.length / booksPerPage);
}


