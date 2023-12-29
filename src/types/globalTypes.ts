export interface IProduct {
  _id?: string;
  id: number;
  name: string;
  status: boolean;
  author: string;
  edition: number;
  publishedDate: string;
  pages: number;
  price: number;
  rating: number;
  details: string;
  image: string;
  quantity?: number;
}
