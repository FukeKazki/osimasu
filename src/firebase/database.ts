import firebase from 'firebase/app'
import 'firebase/firestore'

import {firebaseConfig} from './config'
import { osi } from '../lib/data'

class Fire {
	constructor() {
		if (firebase.apps.length === 0) {
			firebase.initializeApp(firebaseConfig)
		}
	}

	imagesCollection() {
		return firebase.firestore().collection('osi')
	}

	uploadData(data: osi) {
		firebase.firestore().collection('osi').doc(data.id).set(data)
			.then(() => {
				console.log('upload success')
			})
			.catch(err => {
				console.log('upload failed')
				console.error(err)
			})
	}
}

export const Firebase = new Fire()