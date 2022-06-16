import '../styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UserContext } from '../contexts/UserContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const [user, setUser] = useState({
    name: "Axel",
    password: "tacos",
});

  return (
  
    <UserContext.Provider value={user}>
      <CssBaseline />
      <Component {...pageProps} />
    </UserContext.Provider>

  )
}

export default MyApp
