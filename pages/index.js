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
            Mongodb, Expressjs, Nodejs, Nextjs, Tailwindcss, React-Native, Java and sveltejs as well. I have experiance 
            working with C and C++ also.
          </p>
        </div>
        <div className={styles.projects}>
          <h2 className={styles.projectsHeading}>Projects Developed</h2>
          <div className={styles.projectContainer}>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/1.png" alt="image1" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>This is the first react application developed which renders a message addressing the person whose name is entered in the inpt field regarding safty against covid19 virus</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/2.png" alt="image2" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>Check2</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/3.png" alt="image3" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>Check3</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/4.png" width="500px" height="500px" alt="image4"/>
              </div>
              <div className={styles.imageDescription}>
                <p>Check4</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/5.png" alt="image5" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>This is the first website created using nextjs, a JavaScript framework. This website shows all the 
                  anime (japanese cartoon) I love to watch over and over.</p>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/6.png" alt="image6" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>Check6</p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src="/7.png" alt="image7" width="500px" height="500px"/>
              </div>
              <div className={styles.imageDescription}>
                <p>Check7</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <h2 className={styles.footerHeader}>Contact me</h2>
        </footer>
      </body>
    </>
  )
}