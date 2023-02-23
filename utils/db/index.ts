import admin from 'firebase-admin';
import firebaseAccountCredentials from './firebaseAccountKey.json';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(
                firebaseAccountCredentials as admin.ServiceAccount
            ),
        });
    } catch (error) {
        console.log('Firebase admin initialization error');
    }
}
export default admin.firestore();
