import React from 'react'

const headers = ['SL', 'Date', 'Diagnosis', 'Weight', 'Doctor'];

const formatDate = (date) => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const Records = props => (
  <div className="records">
    <div className="container-tight">
      <div className="table-rapper">
        <table className="table">
          <thead id="table-header">
            <tr>
              {headers.map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody id="table-body">
            {props.records.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.diagnosis.severity}</td>
                  <td>{formatDate(item.timestamp)}</td>
                  <td className="t-left">{item.diagnosis.name}</td>
                  <td>{item.meta.weight}</td>
                  <td className="t-left">{item.doctor.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Records