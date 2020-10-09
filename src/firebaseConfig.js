import firebase from "firebase";

const config = {
    // Put your configuration here
};

firebase.initializeApp(config);

const messaging = firebase.messaging()

export const requestPermission = async () => {
    try {
        await Notification.requestPermission().then(async permission=>{
            if (permission === 'denied') {
                console.log('Permission wasn\'t granted. Allow a retry.');
                return;
              } else if (permission === 'default') {
                console.log('The permission request was dismissed.');
                return;
              }
              const token = await messaging.getToken();
              console.log("user token: ", token);
              return token;
        });
    } catch (error) {
        console.error(error);
    }
};

messaging.onMessage(function(payload) {
    console.log("Notification --->" ,payload)
});

