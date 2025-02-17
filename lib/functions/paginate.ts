type PaginationParams<T> = {
    currentPage: number;
    itemsPerPage: number;
    items: T[];
  };
  
  export function paginate<T>({ currentPage, itemsPerPage, items }: PaginationParams<T>) {
    const page = Math.max(1, currentPage);
    const perPage = Math.max(1, itemsPerPage);
  
    const startIndex = (page - 1) * perPage;
    const paginatedItems = items.slice(startIndex, startIndex + perPage);
  
    const totalPages = Math.ceil(items.length / perPage);
  
    return {
      paginatedItems,
      totalPages,
      currentPage: page,
      itemsPerPage: perPage,
    };
  }
  