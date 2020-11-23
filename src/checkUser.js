import { Auth } from 'aws-amplify'

const checkUser = async (updateUser) => {

  try {
    const userData = await Auth.currentSession();

    if (!userData) {
      console.log('userData: ', userData);
      updateUser({});
      return;
    }

    console.log(userData);
    //complexx destructuring, could use userData.idToken.payload, would be used in angular
    const { idToken: { payload }} = userData;

    // property indexer operator: var[propertyOfVar]
    const isAuthorized =
      payload['cognito:groups']
      && payload['cognito:groups'].includes('Admin');

    updateUser({
      username: payload['cognito:username']
      , isAuthorized // isAuthorized: isAurthorized shorthand
    });
  }

  catch (err) {
    console.error(err);
  }

  
}

export default checkUser