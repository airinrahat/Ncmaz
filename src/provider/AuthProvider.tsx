'use client'
import React, { createContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { app } from '@/firebase/firebase'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth)
	}
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
			console.log('current user', currentUser)
		})
		return () => {
			return unsubscribe()
		}
	}, [])

	const authInfo = {
		user,
		setUser,
		createUser,
		logOut,
		signIn,
	}
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
