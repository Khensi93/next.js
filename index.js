import styles from '../styles/Home.module.css'
import Image from 'next/dist/client/image'
import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Software Engineering</title>
        <meta name="description" content="Software Engineering" />
      </Head>
      <div class ="topnav">

      <a href="/"class="active">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      </div>
      

      <div>
        <h1>Tell me about yourself</h1>
        <p>I have recently completed my 3-year Diploma In Information Technology at Richfield Graduate Institute. This graduate programme is the perfect step toward achieving my goal of becoming a system developer.</p> 
         <p> During my time in richfield, i have learnt how to use different languages in programming. I have a great desire to learn and enjoy team projects. Since i'm highly passionate about the field, i believe this role is a great fit. It will allow me to put my current skills to work, as well as develop new ones that will lead to strong career.</p>
      </div>

      <div class="Why do you want to be a developer?">
        <h2>Why do you want to be a developer</h2>
        <p>I want to be a developer because i've worked hard to develop skills that are relevent to this industry. </p>
        <p>I am excited to begin a career as a developer and learn more about this line of work from industry professionals.</p>
        <ul>
          <li>I like working with people</li>
          <li>I have a passion for learning</li>
          <li>I love Technology</li>
          <li>I like to see order in things</li>
        </ul>
      </div>
      

      

      

        <p className={styles.description}>
          
          <code className={styles.code}></code>
        </p>

        
        
</div>
      
  )
  }
