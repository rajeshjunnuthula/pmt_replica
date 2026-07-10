interface AvatarProps {
  name: string;
}

function Avatar({
  name,
}: AvatarProps) {
  return (
    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
      {name.charAt(0)}
    </div>
  );
}

export default Avatar;