import Head from 'next/head'
import Todo from '../components/Todo'

export default function Home() {
  return (
    <div >
      <Head>
        <title>To Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todo/>

     
    </div>
  )
}
