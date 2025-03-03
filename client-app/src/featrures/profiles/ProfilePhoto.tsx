import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Card, Grid, Header, Image, Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/store/store";
import PhotoUploadWidget from "../../app/imageUpload/PhotoUploadWidget";

interface Props {
  profile: Profile;
}

const ProfilePhoto = ({ profile }: Props) => {
  const {
    profileStore: { isCurrentUser, uploadPhoto, uploading },
  } = useStore();
  const [addPhotoMode, setAddPhotoMode] = useState(false);

  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon>
            {isCurrentUser && (
              <Button
                floated="right"
                basic
                content={addPhotoMode ? "Cancel" : "Add Photo"}
                onClick={() => setAddPhotoMode(!addPhotoMode)}
              />
            )}
          </Header>
        </Grid.Column>
        <Grid.Column width={16}>
          {addPhotoMode ? (
            <div>
              <PhotoUploadWidget
                loading={uploading}
                uploadPhoto={handlePhotoUpload}
              />
            </div>
          ) : (
            <Card.Group itemsPerRow={5}>
              {profile.photos?.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                </Card>
              ))}
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default observer(ProfilePhoto);
