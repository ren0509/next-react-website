import Meta from 'components/meta'
import Container from 'components/container';
import Hero from "components/hero";

export default function Home() {
    return (
        <Container>
            <Meta />
            <Hero title = 'CUBE' subtitle = 'アウトプットしていくサイト' imageOn />
    </Container>
    )
}

//const subtitle = 'アウトプットしていくサイト';
// return (
// <div>
// <header>HEADER</header>
// <main>
// <div className={styles.hero}>
// <h1 style={{ color: 'red', fontSize: '80px' }}>
// CUBE
// </h1>
// <p>{subtitle}</p>
// </div>
// </main>
// <footer>FOOTER</footer>
// </div>
// );

// function EachPost({ title, url}) {
//     return (
//         <article>
//             <a href={url}>
//                 <h3>{title}</h3>
//
//         </article>
//     )
// }

// export  function Posts() {
//     const props1 = { title: '記事のタイトル１', ult: 'post1.html' }
//     const props2 = { title: '記事のタイトル２', ult: 'post2.html' }

// return (
//     <section>
//         <h2>おすすめの記事</h2>
//         <EachPost {...props1} />
//         <EachPost {...props2} />
//     </section>
//     )
// }
