import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

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

	async uploadImage(image: string): Promise<string> {
		const storage = firebase.storage()
		const storageRef = storage.ref()
		const fileName = `${uuidv4()}.jpg`
		const imageRef = storageRef.child(fileName)
		const snapshot = await imageRef.putString(image, 'data_url').catch(err => console.error(err))
		console.log('snapshot', snapshot)
		console.log('ref', snapshot.ref)
		// const url = await snapshot.ref.getDownloadURL().catch(err => console.log(err))
		const url = imageRef.getDownloadURL()
		console.log('url', url)
		return url
	}
}

export const Firebase = new Fire()