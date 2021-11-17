import React from 'react';
import myPhoto from '../Profile/image.jpg';
function ProfilePhoto() {
    return (
       <div className="my-images">
       <img src={myPhoto} className="image" alt='myPhoto'  />
        </div>
    )
}
export default ProfilePhoto
