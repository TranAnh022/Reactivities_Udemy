import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/store/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const ActivityDetail = () => {
  const { activityStore } = useStore();
  const { selectedActivity: activity,loadActivity,loadingInitial } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    id && loadActivity(id)
  }, [id,loadActivity])


  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity?.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button as={Link} to={`/manage/${id}`} basic color="blue" content="Edit" />
          <Button as={Link} to='/activities' basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetail);
