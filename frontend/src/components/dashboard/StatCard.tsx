interface StatCardProps {
  title: string;
  value: number;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-gray-500">
        {title}
      </p>
    </div>
  );
}

export default StatCard;