export interface CardProps {
  image: string;
  title: string;
  text: string;
  countLikes: number;
  countDislikes: number;
  type: boolean;
}

export interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
