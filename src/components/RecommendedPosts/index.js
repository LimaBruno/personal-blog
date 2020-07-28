import React from "react"
import propTypes from "prop-types"

import {
  RecommendedWrapper,
  RecommendedLink,  
} from "./styled"

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink to={previous.fields.slug} cover direction="left" bg="var(--background)" className="previous" alt={previous.frontmatter.title}>
        {previous.frontmatter.title}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink to={next.fields.slug} cover direction="right" bg="var(--background)" className="next" alt={next.frontmatter.title}>
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts