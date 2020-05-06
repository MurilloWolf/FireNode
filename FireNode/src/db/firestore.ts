import admin from 'firebase-admin'

const serviceAccount = require('../config/serviceAccountKey')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

export default db
