import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../details/form/ActivityForm";
import { useStore } from "../../../app/store/store";
import { observer } from "mobx-react-lite";

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && <ActivityDetail />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
