import axios from 'axios';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import store from '../redux/store';
import { resetUser } from '../redux/reducers/Auth';

GoogleSignin.configure({
  webClientId:
    'firebase-adminsdk-7pm3v@therapeia-1d5f7.iam.gserviceaccount.com',
  offlineAccess: true,
});

const googleSignIn = async () => {
  try {
    /**
     * todo1: generated Id token from googleSignin
     * todo2:  Create a Google credential with the token
     * todo3: Sign-in to firebase the user with the credential
     * !->uid: mainINfo.user.uid [User Id]
     * todo4: Get access token for server verification
     * !->firebaseAuthToken [token for sending to server],
     * Google
     * @auth : Refers to firebaseStuff
     * */

    const {idToken} = await GoogleSignin.signIn().catch(e => console.log(e));

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const mainINfo = await auth().signInWithCredential(googleCredential);

    const firebaseAuthToken = await auth().currentUser.getIdToken();

    /*
      #Requesting to node-server for token, uid, verified
    **/

    // let {data: serverResponse} = await axios.post(
    //   `https://shareclub.shridaan.com/api/v1/user/googleauth/${mainINfo.user.uid}`,
    //   {
    //     deviceModel: DeviceInfo.getModel(),
    //     deviceId: DeviceInfo.getDeviceId(),
    //   }, //Must be sent otherwise will send error
    //   {
    //     headers: {
    //       authtoken: firebaseAuthToken,
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );

    console.log(mainINfo, "::::::::::::")
    // console.log("{}{}{}[}{}{}", mainINfo.user.displayName, mainINfo.user.email, mainINfo.user.uid)

    return {
      name: mainINfo.user.displayName,
      email: mainINfo.user.email,
      uid: mainINfo.user.uid,
      profile : mainINfo.user.photoURL,
      loggedIn : true
    };

    // return serverResponse;
  } catch (error) {
    if (statusCodes.SIGN_IN_CANCELLED === String(12501)) {
      return 'cancelled';
    }
    console.log('Error at sign in ', error);
  }
};

const signOut = async () => {
  try {
    
    
    
    store.dispatch(resetUser())
    await GoogleSignin.signOut();
    await auth().signOut();

    console.log('Sign out');
    
  } catch (error) {
    console.error(error);
  }
};

const authSystem = {
  googleSignIn,
  signOut,
};

export default authSystem;
