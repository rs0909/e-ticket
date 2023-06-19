import { GetServerSideProps } from 'next';

import Detail from '@/components/pages/notification/detail';

export interface NotificationType {
  title: string;
  message: string;
  updated_at: string;
  created_at: string;
  user: string;
  id: string;
}

interface DetailProps {
  id: string;
}

export default function DetailPage({ notification }: { notification: NotificationType }) {

  return (
    <div className="w-screen">
      {notification && <Detail notification={notification} />}
    </div>
  );
}

//@ts-ignore
export const getServerSideProps: GetServerSideProps<DetailProps> = async (context) => {
  const { id } = context.params as { id: string }; // Type assertion to specify the expected type

  const res = await fetch(`http://127.0.0.1:8000/api/notification/notification/${id}`);
//  const res = await fetch(`http://127.0.0.1:8000/api/notification/notification/30`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { notification: data },
  };
}
