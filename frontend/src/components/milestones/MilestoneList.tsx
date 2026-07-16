import MilestoneCard from "./MilestoneCard";

import type { Milestone, MilestoneStatus } from "../../types/milestone";

interface MilestoneListProps {
  milestones: Milestone[];
  onDelete: (id: number) => void;
  onStatusChange: (id: number, status: MilestoneStatus) => void;
}

function MilestoneList({ milestones, onDelete, onStatusChange }: MilestoneListProps) {
  return (
    <>
      {milestones.map((milestone) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </>
  );
}

export default MilestoneList;
