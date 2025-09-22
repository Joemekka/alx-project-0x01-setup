export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserCardProps {
  user: UserProps;
}
export interface UserPageProps {
  posts: UserProps[];
}

export interface PostData {
  username: string;
  email: string;
  phone: string;
  website: string;
  userId: number;
  id?: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
export interface userModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface ButtonProps {
  className: string;
  onClick: () => void;
  children: string;
}
export interface FooterProps {
  children: React.ReactNode;
  className: string;
}
