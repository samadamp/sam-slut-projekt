export interface BookTypes {
    key: string;
    title: string;
    cover_i: number;
    author_name?: string | string[];
    first_publish_year?: number;
    ratings_average?: number;
    first_sentence: string;
    description: string;
    review: string;
    totalPages: number;
    rating: number | null;
  }