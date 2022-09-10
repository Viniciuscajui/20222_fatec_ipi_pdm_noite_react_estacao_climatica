import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react'

// classe 
class App extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            latitude : null,
            longitude : null,
            estacao: null,
            data: null,
            icone: null
        }
    }

    obterEstacao= (data,latitude) => {
        const ano = data.getFullYear();
        const d1= new Date(ano, 5,21)
        const d2= new Date(ano,8,24)
        const d3= new Date(ano,11,22)
        const d4= new Date(ano, 3,21)
        const sul = latitude < 0

        if (data >=d1 && data < d2){
            return sul ? 'Inverno' : 'Verão'
        }
        if ( data >= d2 && data <d3){
            return sul ? 'Primavera' : 'Outuno'
        }
         if ( data >= d3 && data <d4){
            return sul ? 'Verão' : 'Inverno'
        }
        return sul ? 'Outuno' : 'Primavera'
    }

    icones = {
        "Primavera" : "fa-seedling",
        "Verão": "fa-umbrella-beach",
        "Outono": "fa-tree",
        "Inverno": "fa-snowman"
    }

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