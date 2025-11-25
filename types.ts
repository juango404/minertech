export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export enum ViewState {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT'
}