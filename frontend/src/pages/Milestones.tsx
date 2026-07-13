import PageHeader from "../components/common/PageHeader";
import MilestoneList from "../components/milestones/MilestoneList";

function Milestones() {
  return (
    <>
      <PageHeader
        title="Milestones"
        subtitle="Track project milestones."
        buttonText="New Milestone"
      />

      <MilestoneList />
    </>
  );
}

export default Milestones;