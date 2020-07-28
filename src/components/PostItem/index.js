import React from "react"
import PropTypes from "prop-types"

import {
    PostItemLink,
    PostItemWrapper,
    PostItemTag,
    PostItemInfo,
    CalendarIcon,
    TimeIcon,
    PostItemDate,
    PostItemTitle,
    PostItemDescription,

} from "./styled"

const PostItem = ({slug, background, category, date, timeToRead, title, description}) => (
    <PostItemLink cover direction="right" bg="var(--background)" duration={0.6} to={ slug }>
        <PostItemWrapper>
            <PostItemTag background={ background }>
                {category}
            </PostItemTag>
            <PostItemInfo>
                <PostItemDate>
                    <CalendarIcon /> { date } {timeToRead && `-`} {timeToRead && <TimeIcon />}{timeToRead &&  ` ${timeToRead} min de leitura`}
                </PostItemDate>
                <PostItemTitle>{ title }</PostItemTitle>
                <PostItemDescription>
                   { description }
                </PostItemDescription>
            </PostItemInfo>
        </PostItemWrapper>
    </PostItemLink>
)

PostItem.propTypes = {
    
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}
export default PostItem