import React from 'react'

// helmet
import { Helmet } from 'react-helmet'

// favicon
import favicon from '../static/img/favicon.ico'

const Head = ({ SiteName }) => {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
            />
            <meta name='theme-color' content='#010101' />
            <meta name='og:locale' content='en_US' />
            <meta name='og:image:height' content='640' />
            <meta property='og:image:width' content='640' />
            <meta
                property='og:image'
                content={favicon}
            />
            <meta property='og:title' content={`${SiteName} Page`} />
            <meta property='og:site_name' content={`${SiteName}`} />
            <meta property='og:description' content='Some Random Ping Pong!' />
            <meta
                name='keywords'
                content={`${SiteName}, ${SiteName} Page`}
            />
            <meta property='og:url' content='https://web-00-team.web.app/' />
            <meta property='og:type' content='website' />
            <meta name='copyright' content={`${SiteName}`} />

            <link rel="shortcut icon" href={favicon} type="image/x-icon" />

            <title>{SiteName}</title>
        </Helmet>
    )
}

Head.defaultProps = {
    SiteName: 'Sample Site'
}

export default Head
