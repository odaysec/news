export interface Quote {
  id: number;
  title: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
  shareEnabled: boolean;
}