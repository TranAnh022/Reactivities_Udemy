import { Fragment, useEffect } from "react";
import "./style.css";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../featrures/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponent";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
