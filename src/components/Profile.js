import React from 'react';
import Container from '../elements/Container';
import ProfilePhoto from '../icons/photo.jpg';
import Photo from '../elements/Photo';

const Profile = ({name, profession}) => {
  return (
    <Container main>
      <Container small>
        <Photo src={ProfilePhoto} title={name}/>
      </Container>
      <Container large>
        <div>
          <p>{name}</p>
          <p>{profession}</p>
        </div>
      </Container>
      <Container small>
        
      </Container>
    </Container>
  );
}

export default Profile;