import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../../app/models/activity";
import { ChangeEvent, useState } from "react";

type Props = {
  closeForm: () => void;
  activity: Activity | undefined;
  createOrEdit: (activity: Activity) => void;
};

const ActivityForm = ({
  closeForm,
  activity: selectedActivity,
  createOrEdit,
}: Props) => {
  const intialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    date: "",
    city: "",
    venue: "",
    description: "",
  };

  const [activity, setActivity] = useState(intialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
    console.log(activity);
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} atutocomplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
