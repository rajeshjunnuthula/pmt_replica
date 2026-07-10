interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({
  search,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full border rounded-lg px-4 py-2"
      />
    </div>
  );
}

export default SearchBar;