import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            xx
        </div>
    )
}

export default App


const Root = () => {
    return (
        <App/>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'))
