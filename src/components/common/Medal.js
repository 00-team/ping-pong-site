import React from 'react'

const Medal = ({ rank }) => {
    const RankColors = {
        1: '#FBC41A',
        2: '#C0C0C0',
        3: '#CD7F32'
    }

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 68 68'
        >
            <polygon
                fill='#FF7E7E'
                points='28.593 2.001 37.075 25.325 28.191 25.325 19.709 2.001'
            />
            <path
                fill='#EF3D3D'
                d='M19.7049,1.9986l8.4901,23.33h8.8799l-0.68-1.86c-7-4.47-11.95-15.68-14.13-21.47H19.7049z'
            />
            <polygon
                fill='#FF7E7E'
                points='39.412 2.001 30.93 25.325 39.814 25.325 48.296 2.001'
            />
            <path
                fill='#EF3D3D'
                d='M48.2997,1.9986l-8.4901,23.33h-8.8799l0.68-1.86c7-4.47,11.9499-15.68,14.13-21.47H48.2997z'
            />
            <circle cx='34.002' cy='47.727' r='18.273' fill={RankColors[rank] || '#FFF' } />
            <path
                fill={RankColors[rank] || '#FFF'}
                d='M52.2697,47.7287c0,10.09-8.18,18.27-18.27,18.27c-6.88,0-12.87-3.8-15.99-9.42
			c1.83,0.63,3.79,0.96,5.83,0.96c10.09,0,18.28-8.19,18.28-18.28c0-3.2-0.83-6.22-2.29-8.84
			C47.0597,32.8386,52.2697,39.6787,52.2697,47.7287z'
            />
            <path
                fill='#FFF'
                d='M30.1663 40.729c-.2754 0-.5405-.1523-.6719-.4155-.1846-.3706-.0337-.8208.3369-1.0059 1.3403-.668 2.8433-1.022 4.3457-1.0234 0 0 .0005 0 .001 0 .4141 0 .7495.3354.75.749.0005.4146-.335.7505-.749.751-1.2725.0015-2.5444.3008-3.6787.8662C30.3928 40.7036 30.2786 40.729 30.1663 40.729zM25.5872 46.1186c-.0747 0-.1514-.0112-.2266-.0352-.395-.125-.6138-.5469-.4883-.9414.356-1.1235.8984-2.1631 1.6113-3.0903.2524-.3291.7231-.3901 1.0518-.1377.3286.2529.3901.7236.1377 1.0518-.6064.7886-1.0679 1.6733-1.3711 2.6294C26.2009 45.9145 25.9055 46.1186 25.5872 46.1186z'
            />
            <path
                d='M34,33.73c-7.72,0-14,6.28-14,14c0,7.72,6.28,14,14,14c7.72,0,14-6.28,14-14C48,40.01,41.72,33.73,34,33.73z M34,59.73
			c-6.62,0-12-5.39-12-12c0-6.62,5.38-12,12-12s12,5.38,12,12C46,54.34,40.62,59.73,34,59.73z'
            />
            <path
                d='M41.88,30.14v-3.32c0-0.75-0.33-1.42-0.86-1.88l8.22-22.6c0.11-0.3,0.06-0.65-0.13-0.91C48.93,1.16,48.62,1,48.3,1h-8.89
			c-0.42,0-0.79,0.26-0.94,0.66L34,13.95L29.53,1.66C29.39,1.26,29.01,1,28.59,1h-8.88c-0.33,0-0.64,0.16-0.82,0.43
			c-0.19,0.26-0.23,0.61-0.12,0.91l8.22,22.61c-0.53,0.45-0.86,1.12-0.86,1.87v3.32C19.41,33.15,14.73,39.9,14.73,47.73
			C14.73,58.35,23.37,67,34,67s19.27-8.65,19.27-19.27C53.27,39.91,48.59,33.16,41.88,30.14z M40.11,3h6.76l-7.76,21.32
			c-0.1742,0-7.1463,0-6.75,0C38.1346,8.4667,34.8974,17.3399,40.11,3z M21.13,3h6.76l5.05,13.87l-2.71,7.45h-1.34L21.13,3z
			 M28.13,26.82c0-0.27,0.22-0.5,0.5-0.5c3.7743,0,6.601,0,10.75,0c0.27,0,0.5,0.23,0.5,0.5v2.55c-1.85-0.6-3.83-0.92-5.88-0.92
			s-4.02,0.3199-5.87,0.92V26.82z M34,65c-9.52,0-17.27-7.75-17.27-17.27c0-9.5666,7.7843-17.28,17.27-17.28
			c9.4332,0,17.27,7.6489,17.27,17.28C51.27,57.25,43.53,65,34,65z'
            />
        </svg>
    )
}

Medal.defaultProps = {
    rank: 0,
}

export default Medal