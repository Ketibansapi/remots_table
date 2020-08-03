# remo
- Run `npm install`
- If you are planning to use firebase, create a firebase project and add your config in `src/services/firebase`
- Sample express server is added within this repo. Run `npm run start-server` to start the server in port `8000`. 
- This server contains sample get and post request apis and will be accessed in Login page from browser as an example (Component: `Auth.tsx`)
- You are free to use either server and/or firebase for state management
- Run `npm run start` to start the react web server. This will open the landing page with login button

## Requirements
- Use google login/email login to authenticate user
- This app has 2 routes (`/` and `/theater`)
- Convert the route `/theater` as authenticated i.e. user can go into this page only if he/she is logged in
- Theater page
  - This page will have a conference map with tables as below
  ![Map](https://github.com/RiotlySocial/remo-coding-challenge-1/blob/master/Map.png?raw=true)
  - Once user is authenticated, users will be redirected into this theater page
  - Users can go into any table and their avatars will be shown as below.
  ![Map with user avatars](https://github.com/RiotlySocial/remo-coding-challenge-1/blob/master/Map-with%20users.png?raw=true)

- Functionality testing (Bonus)
  - How to test this feature in mass scale?
  - This conference map can have 100 people max. How as a developer can you test this with max capacity?
  - You can explain this in  loom video, if you dont have time to implement.

## Deliverables
- Zip file containing the codebase (except node_modules)
