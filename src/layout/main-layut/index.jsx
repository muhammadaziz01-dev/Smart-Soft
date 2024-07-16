import {  Outlet } from 'react-router-dom';
import {Header, Footer} from "@components"

function Index() {
  return <>
  <Header />
  <main className=' min-h-[83.7vh]'>
    <Outlet />
  </main>
  <Footer />
  </>
}

export default Index