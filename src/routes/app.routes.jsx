import { Moviepreview } from '../pages/Moviepreview'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile'
import { Details } from '../Pages/Details'
import { New } from '../pages/New'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Details/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/moviepreview' element={<Moviepreview/>}/>
    </Routes>
  )
}