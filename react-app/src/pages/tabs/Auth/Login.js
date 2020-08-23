import React from 'react'
import { IonPage, IonCol,IonRow, IonContent, IonItem, IonLabel, IonInput, IonButton, IonRouterLink } from '@ionic/react'
import NavHeader from '../../../components/NavHeader'

const Login = () =>{
    return(
        <IonPage>
            <NavHeader title="Login" />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput name="name" type="text" required></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput name="name" type="password" required></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton type="submit" color="primary" expand="block">
                            Login
                        </IonButton>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol class="ion-text-center ion-padding-vertical">
                        <IonRouterLink routerLink={'/forgot'}>Forgot Password?</IonRouterLink> 
                    </IonCol>
                </IonRow>
            </IonContent>

        </IonPage>
    )
}

export default Login;