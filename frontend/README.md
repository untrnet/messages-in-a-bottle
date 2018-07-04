# Messages in a Bottle: Front-end

This is the front-end for the Messages in a Bottle experiment.

## About

The idea is that this site will be served via the captive gateway prompt on a user device. When connected to, the site will load the current message stored on the backend, and allow the user to submit a new message to replace it, if their authentication is successful.

The motivation for this experiment is to encourage those who connect to reflect upon what message has been left for them, and to leave something novel or special for the next visitor. In order to facilitate this, each visitor can only send a message once. My hope is that with that restriction in place anyone who wants to leave a message will think carefully about what they want to say beforehand, since they only have one chance.

### Authentication

Finding an auth solution for this experiment has been a bit tricky, due to the UX requirements I had set for myself: users should be considered anonymous, but also be allowed to leave a single message. The difficulty in this was compounded by another requirement for UNTRNET as a whole: the devices that broadcast the WiFi networks and host the experiements such as this one may not have an internet connection.

For this experiment, I also did not want to deal with user accounts, because I figured the creation of an account would disrupt the user journey. I also did not want to be liable for personal data (thanks GDPR).

The solution I decided upon was using a browser fingerprint & a timestamp to create a unique string, and authenticating backend requests against that. The string is saved in local storage to persist authentication state between visits (once a message has been sent, the token is considered invalid on the backend) but I know it isn't a perfect solution; clearing local storage will allow a visitor to send another message. No authentication solution is perfect, however, and for my little experiment I considered this a reasonable trade-off.