import React from 'react'
import Header from './Header'
import Selector from './Selector'
import Records from './Records'
import Patient from './Patient'
import Spinner from './Spinner'

class App extends React.Component {
  state = {
    patient: '',
    dob: '',
    height: '',
    records: [],
    isFetching: false,
    error: ''
  }


  handleSubmit = (e, id) => {
    e.preventDefault()
    console.log('===>', id)

  }

  fetchPatient = (data) => {
    this.setState({ isFetching: true })

    let { value: userId} = data

    fetch(`https://jsonmock.hackerrank.com/api/medical_records?userId=${userId}`)
    .then(
      res => res.json(), 
      error => {
        this.setState({ error })
      }
    )
    .then(res => {
        this.setupState(res)
      }
    )
    
  }

  setupState = (data) => {
    const { data: records } = data
    this.setState({
      patient: records[0].userName,
      dob: records[0].userDob,
      height: records[0].meta.height,
      records: records,
      isFetching: false,
      error: ''
    })
  } 

  insertContent = () => {
    if (this.state.isFetching) {
      return (
        <Spinner />
      )
    } else if (this.state.patient) {
      return (
        <>
          <Patient
            patient={this.state.patient}
            dob={this.state.dob}
            height={this.state.height}
          />
          <Records records={this.state.records} />
        </>
      )
    } else {
      return <h3 className="no-patients">No patient selected</h3>
    }
  }

  render () {
    return (
      <div className="App">
        <Header 
          handleSubmit={this.handleSubmit}
        />
        <Selector fetchPatient={this.fetchPatient}/>
        {this.insertContent()}
      </div>
    )
  }
}

export default App