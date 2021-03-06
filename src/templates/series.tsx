import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import {
    Header,
    PostCardList,
    Footer,
} from 'components'

import theme from 'utils/theme'

type Context = {
    pathContext: {
        series: string,
    },
}

export default ({
    pathContext: {
        series,
    },
    data,
    data: {
        site: {
            siteMetadata: {
                title,
                owner,
            },
        },
        allMarkdownRemark: {
            edges
        }
    },
}: Context & SiteData & AllMarkdownRemarkData) => (
    <>
        <Header fixed title={title} />
        <Container>
            <Summary>{series}</Summary>
            <PostCardList data={data}/>
        </Container>
        <Footer owner={owner.name} />
    </>
)

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.headerHeight};
`

const Summary = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: ${theme.contentSpacing};
    padding: 0 ${theme.contentSidePadding};
`

export const pageQuery = graphql`
    query SeriesQuery($series: String!) {
        site {
            siteMetadata {
                title
                owner {
                    name
                }
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fields: { series: { eq: $series } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    frontmatter {
                        title
                        author
                        date(formatString: "YYYY년 M월 D일")
                        tags
                    }
                }
            }
        }
    }
`
