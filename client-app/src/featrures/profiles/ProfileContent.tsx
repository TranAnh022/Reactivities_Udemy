import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhoto from "./ProfilePhoto";
import { Profile } from "../../app/models/profile";
import { observer } from "mobx-react-lite";


interface Props {
  profile:Profile
}

const ProfileContent = ({profile}:Props) => {
  const panes = [
    { menuItem: "About", render: () => <Tab.Pane>About Content</Tab.Pane> },
    { menuItem: "Photos", render: () => <ProfilePhoto profile={profile} /> },
    { menuItem: "Events", render: () => <Tab.Pane>Events Content</Tab.Pane> },
    {
      menuItem: "Followers",
      render: () => <Tab.Pane>Followers Content</Tab.Pane>,
    },
    {
      menuItem: "Following",
      render: () => <Tab.Pane>Following Content</Tab.Pane>,
    },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
    ></Tab>
  );
};

export default observer(ProfileContent);
