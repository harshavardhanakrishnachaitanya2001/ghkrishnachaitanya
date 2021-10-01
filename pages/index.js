import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Website.module.css'
import Head from 'next/head'
export default function Website (){
  return (
    <>
      <Head>
        <title>G. H. Krishna Chaitanya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={styles.body}>

        <div className={styles.header}>
          <h1 className={styles.mainHeading}>G. H. Krishna Chaitanya</h1>
        </div>
        <div className={styles.aboutMe}>
          <h2 className={styles.aboutMeHeading}>About me...</h2>
          <p className={styles.aboutMeDescription}>
          Hello Guys!! G. H. Krishna Chaitanya am persuing B.tech IV year at Marri Laxman Reddy Institute of Technology 
            and Management. I am a passionate full stack developer willing to learn new things whenever possible.
          </p>
          <p className={styles.aboutMeDescription}>
            I have been working with React JS from over 2 years. I also love to work with HTML, CSS, Venilla JavaScript, 
            Mongodb, Expressjs, Nodejs, Nextjs, Tailwindcss, CSS flexbox, React-Native, Java and sveltejs as well. I have experiance 
            working with C and C++ also.
          </p>
        </div>
        <div className={styles.projects}>
          <h2 className={styles.projectsHeading}>Projects Developed</h2>
          <div className={styles.projectContainer}>
            <Link href="https://first-react-app-zeta.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/1.png" alt="image1" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is the first react application developed which renders a message addressing the person whose name is 
                      entered in the inpt field regarding safty against covid19 virus. The styling for this app is done using plane old CSS</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="https://todoapplication-h8wttcl6t.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/2.png" alt="image2" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is a todo-list developed using reactjs, which displays the task entered in the input field along 
                      with a button that marks the task as completed. The styling for this app is done using plane old CSS</p>
                  </div>
                </div>
              </a>
            </Link>


            <Link href="https://score-board-application.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/3.png" alt="image3" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is a react application which is a virtual score board where players can enter their names and increment or decrement their scores by 1; the score can go even below 0. I am still working on deciding who the winner will be.</p>
                  </div>
                </div>
              </a>
            </Link>


            <Link href="https://currymaker.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/4.png" width="500px" height="500px" alt="image4"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is a react app that renders recipies that can be prepared with the vegitables in the list displayed. 
                      This app is the first app that uses react router to navigate from one page to another. This app was styled 
                      using react&aposs styled components</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="https://anime-vert.vercel.app/">
            <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/5.png" alt="image5" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is the first website created using nextjs, a JavaScript framework. This website shows all the 
                      anime (japanese cartoon) I love to watch over and over.</p>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="https://todo-svelte-six.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/6.png" alt="image6" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is another todo-list app that is created using svelte js, a framework of JavaScript just like react. 
                      This does things similar to the react todolist only nicely styled using CSS.</p>
                  </div>
                </div>
              </a>
            </Link>


            <Link href="https://clock-app-with-svelte-js.vercel.app/">
              <a>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <Image src="/7.png" alt="image7" width="500px" height="500px"/>
                  </div>
                  <div className={styles.imageDescription}>
                    <p>This is another app created using sveltejs which displayed correct time of the day. There are two fields in the app that allows you to set time in the clock.</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <footer>
          <h2 className={styles.footerHeader}>Contact me</h2>
        </footer>
      </body>
    </>
  )
}