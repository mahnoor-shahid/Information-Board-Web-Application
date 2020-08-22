import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from '../components/SmallHeader';
import LargeHeader from '../components/LargeHeader';

const Trending = () => {

    return (
        <IonPage>
            <SmallHeader title="Trending"/>
            <IonContent fullscreen>
                <LargeHeader title="Trending"/>
            </IonContent>
        </IonPage>
    )
};

export default Trending;