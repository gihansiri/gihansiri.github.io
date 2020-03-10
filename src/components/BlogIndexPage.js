import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div> 
      <header>
        <div>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        </div>
        
        <Bio />
         <a href='https://xn--besucherzhler-counter-e2b.com/'>kostenlose Counter</a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=b51a4c09c5e3da8ff4b85532bb9a62ce583f3800'></script>
<script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/647191/t/0"></script>
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>         
          <Link href="/about">About</Link> &bull; <Link href="/tags">Tags</Link>          
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
