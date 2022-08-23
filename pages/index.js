import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Karizza April M. Quinto. I am 21 years old and currently studying as a 4th year BSIT student at the University of the Assumption. I am actually an irregular student since I shifted from BS Tourism Management to BS Information Technology. My hobbies are playing some instruments, singing in the bathroom, collecting K-pop albums, and playing PlayStation with special friends. My favorite foods are anything with ketchup or tomato sauce, such as caldereta, menudo, afritada, asado, and many more. One fact about me is that I love ketchup. Others prefer to dip their chicken joy or McDo fried chicken in gravy, while here’s me, ignoring the gravy and asking for some ketchup at the counter.</p>
        <p>I took IT because it helps us to understand the formation of new knowledge and then the usage and implementation of it in any societal problem or crisis. Moreover, I also want to develop my passion and love for technology. My brother actually encouraged me to take this program because, according to him, he sees me having a future in the field of technology. That's why I decided to shift and take BSIT instead. Therefore, I believe it was a very good decision since I am happy with what I'm doing now and I notice that I excel more here compared to my previous program.</p>
        <p>Ten (10) years from now, I see myself as a contented and successful woman. I am happy with what I'm doing because this is what I prayed for 10 years ago. </p>
        <p>I hope to gain more knowledge about creating and designing interactive programs that users can use in their daily lives. I also anticipate that we will be aware and knowledgeable of the various strategies and topics of this course.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}