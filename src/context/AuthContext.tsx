import {useContext, useState, useEffect, createContext} from 'react'

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
}

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext