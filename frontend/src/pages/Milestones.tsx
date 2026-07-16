import { useEffect, useState } from "react";

import PageHeader from "../components/common/PageHeader";
import MilestoneForm from "../components/milestones/MilestoneForm";
import MilestoneList from "../components/milestones/MilestoneList";

import { milestoneApi } from "../api/milestones";
import { projectApi } from "../api/projects";
import { ApiError } from "../api/client";

import type { Milestone, MilestoneStatus, Project } from "../types";

function Milestones() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    milestoneApi
      .getAll()
      .then(setMilestones)
      .catch(() => setError("Failed to load milestones"));
    projectApi.getAll().then(setProjects).catch(() => {});
  }, []);

  async function handleAddMilestone(milestone: Partial<Milestone>) {
    try {
      const newMilestone = await milestoneApi.create(milestone);
      setMilestones((prev) => [newMilestone, ...prev]);
      setShowForm(false);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to create milestone");
    }
  }

  async function handleDeleteMilestone(id: number) {
    try {
      await milestoneApi.delete(id);
      setMilestones((prev) => prev.filter((milestone) => milestone.id !== id));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete milestone");
    }
  }

  async function handleStatusChange(id: number, status: MilestoneStatus) {
    try {
      const updated = await milestoneApi.update(id, { status });
      setMilestones((prev) =>
        prev.map((milestone) => (milestone.id === id ? updated : milestone))
      );
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update milestone");
    }
  }

  return (
    <>
      <PageHeader
        title="Milestones"
        subtitle="Track project milestones."
        buttonText="New Milestone"
        onButtonClick={() => setShowForm((prev) => !prev)}
      />

      {error && (
        <p className="text-red-600 text-sm mb-4">{error}</p>
      )}

      {showForm && (
        <MilestoneForm
          projects={projects}
          onSubmit={handleAddMilestone}
        />
      )}

      <MilestoneList
        milestones={milestones}
        onDelete={handleDeleteMilestone}
        onStatusChange={handleStatusChange}
      />
    </>
  );
}

export default Milestones;
