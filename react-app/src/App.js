import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Profile from './pages/tabs/Profile';
import  Search from './pages/tabs/Search';
import  Submit from './pages/tabs/Submit';
import  News from './pages/tabs/News';
import  Trending from './pages/tabs/Trending';
import  EditProfile from './pages/tabs/Auth/EditProfile';
import  SignUp from './pages/tabs/Auth/SignUp';
import  Login from './pages/tabs/Auth/Login';
import  Forgot from './pages/tabs/Auth/Forgot';
import {newspaperOutline, personCircleOutline, searchOutline, createOutline, trendingUpOutline} from "ionicons/icons"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
            <Route
            path="/"
            render = {() => <Redirect to ="/news" />}
            exact = {true}
            />

              <Route path="/news" component={News} />
              <Route path ="/trending" component={Trending} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path ="/editProfile" component={EditProfile} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />

            <Route component={() => <Redirect to ="/news" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="news" href="/news" >
          <IonIcon icon={newspaperOutline}/>
          <IonLabel>News Board</IonLabel>
        </IonTabButton>
        <IonTabButton tab="trending" href="/trending" >
          <IonIcon icon={trendingUpOutline}/>
          <IonLabel>Trending</IonLabel>
        </IonTabButton>
        <IonTabButton tab="submit" href="/submit" >
          <IonIcon icon={createOutline}/>
          <IonLabel>Submit</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search" >
          <IonIcon icon={searchOutline}/>
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile" >
          <IonIcon icon={personCircleOutline}/>
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
