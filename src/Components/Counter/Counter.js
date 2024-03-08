import {Component} from 'react'
import './Counter.css'

class Counter extends Component {
    state = {count: 0}
    onIncrement = () => {
        // console.log('increment clicked')
        this.setState(prevState => {
            console.log(`previous state value ${prevState.count}`)
            return {count: prevState.count + 1}
        })
    }
    onDecrement = () => {
        // console.log('decrement clicked')
        this.setState(prevState => {
            console.log(`previous state value ${prevState.count}`)
            return {count: prevState.count - 1}
        })
    }
    render() {
        const {count} = this.state
        return (
            <div className='container'>
                <h1 className='heading'>Counter</h1>
                <p className='count'>{count}</p>
                <div>
                    <button className='button' onClick = {this.onIncrement}>Increment</button>
                    <button className='button' onClick = {this.onDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter