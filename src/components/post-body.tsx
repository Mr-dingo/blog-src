import styled, { injectGlobal } from 'styled-components'
import theme from 'utils/theme'

import 'assets/prism-atom-dark.css'

export default styled.article`
    font-weight: 400;

    a {
        color: ${theme.primaryColor};

        :focus, :active, :hover {
            text-decoration: underline;
        }
    }

    strong {
        font-weight: 600;
    }
    
    blockquote {
        position: relative;
        color: #999;
        margin: 1.25rem 0;
        padding-left: 2.5rem;

        &:before {
            content: '\u201C';
            position: absolute;
            top: -30px;
            left: 0;
            font-size: 3.75rem;
            font-weight: bold;
        }
    }

    & :not(pre) > code {
        font-size: .8rem;
        padding: .15rem .4rem;
        background-color: ${theme.grayColor};
        border-radius: 3px;
    }

    ul {
        padding-left: 1.5rem;
    }

    img {
        max-width: 100%;
    }
`

// Add hot fix for code style that suddenly not working
injectGlobal`
    article :not(pre) > code {
        font-size: .8rem;
        padding: .15rem .4rem;
        background-color: ${theme.grayColor};
        border-radius: 3px;
    }
`
