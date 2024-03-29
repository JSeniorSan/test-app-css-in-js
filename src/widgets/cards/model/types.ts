export interface CardProps {
  image: string;
  title: string;
  text: string;
  type: boolean;
  id: number;
}

export interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface LikesCountInterface {
  dislikeCount: number;
  likeCount: number;
}
