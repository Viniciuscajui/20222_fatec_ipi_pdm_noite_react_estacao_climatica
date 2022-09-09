import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react'

// classe 
class App extends React.Component {
    render() {
        return (
            <div>
                Meu App
            </div>
        )
    }
}

ReactDOM.render( // renderizando a react 
    <App/>,
        document.querySelector('#root')
)