import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  photo.then((resBody) => {
    user.then((resUser) => {
      console.log(`${resBody.body} ${resUser.firstName} ${resUser.lastName}`);
    });
  });
}
