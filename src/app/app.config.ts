import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers:
    [provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "danotes-24506", "appId": "1:709325864414:web:51e5812f4f8a70a36a314f", "storageBucket": "danotes-24506.firebasestorage.app", "apiKey": "AIzaSyAcgbooDo0y6m2g827-AaDViN2Ev8dQTcs", "authDomain": "danotes-24506.firebaseapp.com", "messagingSenderId": "709325864414", "measurementId": "G-Q64CGFGDWJ" }))),
    importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-24506","appId":"1:709325864414:web:51e5812f4f8a70a36a314f","storageBucket":"danotes-24506.firebasestorage.app","apiKey":"AIzaSyAcgbooDo0y6m2g827-AaDViN2Ev8dQTcs","authDomain":"danotes-24506.firebaseapp.com","messagingSenderId":"709325864414","measurementId":"G-Q64CGFGDWJ"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
