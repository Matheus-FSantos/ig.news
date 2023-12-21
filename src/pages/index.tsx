import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div>
      <h1 className={ inter.className }>Hello World</h1>
    </div>
  )
}

export default Home;
