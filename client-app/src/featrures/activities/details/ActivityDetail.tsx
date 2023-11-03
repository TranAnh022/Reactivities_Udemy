import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

type Props = {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetail = (props: Props) => {
  return (
    <Card>
      <Image src={`/assets/categoryImages/${props.activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{props.activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{props.activity.date}</span>
        </Card.Meta>
        <Card.Description>{props.activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => props.openForm(props.activity.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={props.cancelSelectedActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetail;
