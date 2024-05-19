export interface Book {
    key: string;
    title: string;
    cover_i: number;
    author_name?: string[];
    first_publish_year?: number;
    ratings_average?: number;
  }