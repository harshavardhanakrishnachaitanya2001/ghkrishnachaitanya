import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Website.module.css'
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDiscord, faFacebook, faGithub,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Website (){
  return (
    <>
      <Head>
        <title>G. H. Krishna Chaitanya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/icon.jpg" rel="icon"/>
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

            

            

            

            

            

            <div>
              <Link href="https://clock-app-with-svelte-js.vercel.app/">
                <a>
                  <Image src="/7.png" alt="Image 7" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This is another svelte js application that displayes time of the day in 24-hour format. Fields are also 
                    provided with the help of which time that the clock displayes can be set.
                  </p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://todo-svelte-six.vercel.app/">
                <a>
                  <Image src="/6.png" alt="Image 6" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This a second todo-list applicaiton developed using another framework of JavaScript called sveltejs. 
                    This app performs the same task as that of the todo-list developed using react. The only difference between 
                    the two is, this app is more descently styled.
                  </p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://anime-vert.vercel.app/">
                <a>
                  <Image src="/5.png" alt="Image 5" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This is the first app that is developed using nextjs, a framework of JavaScript, an extension to react which 
                    makes routing between pages much more easier than react routers. This app displays all my favorite anime that 
                    I can watch again and again. The styling for this app is done using the style tags of jsx and a little of external CSS.
                  </p>
                </a>
              </Link>
            </div>

            <div>
                  <Image src="/8.png" alt="Image 8" height="300px" width="300px"/>
                  <p className={styles.imageDescription}>
                    This is an applicatoin that is developoed using nodejs, that displays names and ids of pokemon randomly.
                  </p>
                  <p className={styles.imageDescription}>
                    <b>Note:</b> In order for this app to work, first nodejs must be installed in your systems. Next, clone the repository using &lsquo; git clone &lsquo; command. The repository to clone is: <code>https://github.com/harshavardhanakrishnachaitanya2001/pokedex</code>. Next using node command the &lsquo; app.js &lsquo; file in the terminal.
                  </p>
            </div>

            <div>
              <Link href="https://currymaker.vercel.app/">
                <a>
                  <Image src="/4.png" alt="Image 4" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This is a react web application that displayes the steps to prepare various food dishes with the vegitables 
                    that are in the list. The rouiting in this app is done using react routers and the syling for this app is 
                    done using react&lsquo;s styled components.
                  </p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://score-board-application.vercel.app/">
                <a>
                <Image src="/3.png" alt="Image 3" width="300px" height="300px"/>
                <p className={styles.imageDescription}>
                  This is the an application developed using React.js which is a virtual score board. Plyers playing any game 
                  will enter their names in the input filed provided and they will be provided with two buttons which 
                  increment and decrement the scores tarting from 0. I am still working on fixing the winning point. The styling 
                  for this app is done using the style tags that come with jsx.
                </p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://todoapplication-nu.vercel.app/">
                <a>
                  <Image src="/2.png" alt="Image 2" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This is a todo-list application developed using reactjs, where the user enters the task he wants to do in 
                    the input field and it will be displayed along with a button that when clicked marks that specific task as 
                    done. The styling for this app is done using the style tags that come with jsx.
                  </p>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://first-react-app-zeta.vercel.app/">
                <a>
                  <Image src="/1.png" alt="image 1" width="300px" height="300px"/>
                  <p className={styles.imageDescription}>
                    This is the first react application developed which addresses the person whose name is filled in the input 
                    field to stay at home to avoid covid virus. This app is styled using the style tags that come with jsx.
                  </p>
                </a>
              </Link>
            </div>

          </div>
        </div>
        <footer>
          <h2 className={styles.footerHeader}>Contact me</h2>
          <div className={styles.footerBody}>
            <p>You can reach me on:</p> 
            <div className={styles.socialLinks}>
              <div style={{marginRight:'10px'}}>
                <Link href="https://www.facebook.com/profile.php?id=100009945935184">
                  <a target="_blank">
                      <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                </Link>
              </div>

              <div style={{marginRight:'10px'}}>
                <Link href="https://twitter.com/kccodes365">
                  <a target="_blank">
                      <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                </Link>
              </div>
              <div style={{marginRight:'10px'}}>
                <Link href="https://www.instagram.com/g_h_k_c/">
                  <a target="_blank">
                      <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </Link>
              </div>

              <div style={{marginRight:'10px'}}>
                <Link href="https://github.com/harshavardhanakrishnachaitanya2001">
                  <a target="_blank">
                      <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </Link>
              </div>

              <div>
                <Link href="mailto:pvageta02@gmail.com">
                  <a target="_blank">
                      <FontAwesomeIcon icon={faEnvelope}/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  )
}