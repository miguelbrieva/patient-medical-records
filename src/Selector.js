import React from 'react'
import Select from 'react-select'

const patients = [
  { value: 1, label: 'John Oliver' },
  { value: 2, label: 'Bob Martin' },
  { value: 3, label: 'Helena Fernandez' },
  { value: 4, label: 'Francesco De Mello' },
]

class Selector extends React.Component {
  state = {
    selectedOption: null
  }

  handleOnChange = (selectedOption) => {
    this.setState(
      { selectedOption },
      () => console.log('Option Selected', this.state.selectedOption)
    )
  }

  handleOnClick = () => {
    if (this.state.selectedOption !== null) {
      this.props.fetchPatient(this.state.selectedOption)
    } else {
      // SHOW ALERT!
    }
    this.setState({ selectedOption: null })
  }

  render () {
    return (
      <div className="selector">
        <div className="container-tight">
          <Select
            className="selector__select"
            placeholder="Select a patient..."
            options={patients}
            onChange={this.handleOnChange}
            value={this.state.selectedOption}
            autoFocus
            isSearchable
            isClearable
          />
            
          <button
            className="selector__show-btn"
            onClick={this.handleOnClick}
          >
            SHOW
          </button>
        </div>
      </div>
    )
  }
}

export default Selector