import { useState } from "react";

interface ProjectFormProps {
  buttonText: string;
  onSubmit: (name: string) => void;
}

function ProjectForm({
  buttonText,
  onSubmit,
}: ProjectFormProps) {
  const [projectName, setProjectName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!projectName.trim()) {
      return;
    }

    onSubmit(projectName);

    setProjectName("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6 mb-6"
    >
      <label className="block mb-2 font-medium">
        Project Name
      </label>

      <input
        type="text"
        value={projectName}
        onChange={(event) =>
          setProjectName(event.target.value)
        }
        placeholder="Enter project name"
        className="w-full border rounded-lg px-3 py-2 mb-4"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default ProjectForm;