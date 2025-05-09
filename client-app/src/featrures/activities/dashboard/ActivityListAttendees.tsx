import { observer } from "mobx-react-lite";
import { Image, List, Popup } from "semantic-ui-react";
import { Profile } from "../../../app/models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  attendees: Profile[];
}

function ActivityListAttendees({ attendees }: Props) {
  return (
    <List horizontal>
      {attendees.map((attendee, index) => (
        <Popup
          hoverable
          key={attendee.userName}
          trigger={
            <List.Item
              key={index}
              as={Link}
              to={`/profiles/${attendee.userName}`}
            >
              <Image
                size="mini"
                circular
                src={attendee.image || "/assets/user.png"}
              />
            </List.Item>
          }
        >
          <Popup.Content>
            <ProfileCard profile={attendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
}

export default observer(ActivityListAttendees);
