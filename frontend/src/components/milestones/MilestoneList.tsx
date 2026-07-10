import milestones from "../../data/milestones";

import MilestoneCard from "./MilestoneCard";

function MilestoneList() {
  return (
    <>
      {milestones.map((milestone) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
        />
      ))}
    </>
  );
}

export default MilestoneList;