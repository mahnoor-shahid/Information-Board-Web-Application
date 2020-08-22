import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from '../components/SmallHeader';
import LargeHeader from '../components/LargeHeader';

const Profile = () => {

    return (
        <IonPage>
            <SmallHeader title="Profile"/>
            <IonContent fullscreen>
                <LargeHeader title="Profile"/>
            </IonContent>
        </IonPage>
    )
};

export default Profile;