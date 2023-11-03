import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ActivityList } from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../details/form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedtActivity: Activity | undefined;
  cancelSelectedActivity: () => void;
  selectActivity: (id: string) => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void
  deleteActivity:(id:string)=>void
}

const ActivityDashboard = (props: Props) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={props.activities}
          selectActivity={props.selectActivity}
          deleteActivity={props.deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {props.selectedtActivity && !props.editMode && (
          <ActivityDetail
            activity={props.selectedtActivity}
            cancelSelectedActivity={props.cancelSelectedActivity}
            openForm={props.openForm}
          />
        )}
        {props.editMode && (
          <ActivityForm
            closeForm={props.closeForm}
            activity={props.selectedtActivity}
            createOrEdit={props.createOrEdit}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
