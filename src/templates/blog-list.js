/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { FaHandPointDown } from "react-icons/fa"
import ScrollAnimation from 'react-animate-on-scroll'
// import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"


import PostCard from "../components/post-card"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"


// import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'


// import Gall1 from '../components/gallery1'

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  easing: 'easeIn',
  arrows: true,

  prevArrow: <div style={{width: "40px", marginRight: "10px", zIndex:'1', cursor:'pointer', dropShadow:'(30px 10px 4px #4444dd)', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "40px", marginLeft: "10px", zIndex:'0', cursor:'pointer', filter:'drop-shadow(0px 0px 10px rgba(0,0,0,.5))'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};

const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/blog/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page">
            <Helmet>
  <body className="blog-list" />
</Helmet>
        <Seo
          title={"Twilightscapes Galleries — Page " + currentPage + " of " + numPages}
          description={
            "Twilightscapes base gallery page " + currentPage + " of " + numPages
          }
        />

        
        
        <div
      className="wrapper1"
      style={{
        textAlign: "center",
      }}
    >
{/* <h1 style={{padding:'10px', margin:'0'}}>Articles</h1> */}

    </div>

        





    <div
      className="wrapper1"
      style={{
        textAlign: "center",
        padding:'5vh 4vw',
        clear:'both'
      }}
    >
<h1 style={{fontSize:'150%', fontWeight:'bold'}}>Archive</h1>

    
<Pagination {...props} />
 <div className="home-posts grids col-1 sm-2 lg-3" style={{clear:'both', textAlign:'left'}}>
 {posts}
 </div>
        <Pagination {...props} />


        

</div>




      </Layout>
    )
  }
}

export default BlogIndex
