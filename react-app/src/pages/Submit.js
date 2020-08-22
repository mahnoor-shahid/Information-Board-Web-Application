import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import SmallHeader from '../components/SmallHeader';
import LargeHeader from '../components/LargeHeader';

const Submit = () => {

    return (
        <IonPage>
            <SmallHeader title="Submit"/>
            <IonContent fullscreen>
                <LargeHeader title="Submit"/>
            </IonContent>
        </IonPage>
    )
};

export default Submit;