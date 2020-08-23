import React from 'react'
import { IonPage, IonCol,IonRow, IonContent, IonItem, IonLabel, IonInput, IonButton} from '@ionic/react'
import NavHeader from '../../../components/NavHeader'

const Forgot = () =>{
    return(
        <IonPage>
            <NavHeader title="Forgot Password" />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="name" type="text" required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">
                            Get Reset Link
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>

        </IonPage>
    )
}

export default Forgot;