import {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <main className="">
      <h1>header</h1>
      <Outlet />
    </main>
  )
}

export default RootLayout