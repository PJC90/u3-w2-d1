import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './Components/CustomNavbar'
import MyFooter from './Components/MyFooter'
import AdditionalContentExample from './Components/AdditionalContentExample'
import BookList from './Components/BookList'
import f from './data/fantasy.json'
import h from './data/history.json'
import ho from './data/horror.json'
import r from './data/romance.json'
import s from './data/scifi.json'
import CommentArea from './Components/CommentArea'
import { Col, Row } from 'react-bootstrap'
import { Component } from 'react'

class App extends Component {
  state = {
    selected: false,
  }
  render() {
    return (
      <div>
        <CustomNavbar addText="Mondadori" />
        <AdditionalContentExample />
        {/* <SingleBook book={h[1]} /> */}

        <BookList manyBooks={h} />

        <MyFooter />
      </div>
    )
  }
}

export default App
