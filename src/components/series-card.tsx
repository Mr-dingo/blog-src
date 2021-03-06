import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import theme from 'utils/theme'

export type SeriesCardProps = {
    name: string,
    count: number,
}

export default ({ name, count }: SeriesCardProps) => (
    <>
        <SeriesLink to={`/series/${name}/`}>{name}</SeriesLink>
        <PostCount>{count}개의 포스트가 있습니다.</PostCount>
    </>
)

const SeriesLink = styled(Link)`
    font-size: 1.25rem;
    font-weight: bold;
`

const PostCount = styled.div`
`
