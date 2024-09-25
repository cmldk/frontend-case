import Image from 'next/image';

interface UserCardProps {
  src: string;
  name: string;
  title: string;
}

export function UserCard({ src, name, title }: UserCardProps) {
  return (
    <div className="flex items-center pt-4 gap-4">
      <Image src={src} width={64} height={64} alt="UserThumb" />
      <div className="flex flex-col">
        <p className="text-lg">{name}</p>
        <p className="text-slate-600">{title}</p>
      </div>
    </div>
  );
}
