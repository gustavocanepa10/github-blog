import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter.tsx'
import { ProfileContextProvider } from './context/ProfileContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ProfileContextProvider>
      <AppRouter />
    </ProfileContextProvider>
     
     </BrowserRouter>
   
  </StrictMode>
)
