var React = require('react')
var bencode = require('bencode')
var App = React.createClass({
  getInitialState: function () { return { data: '', jsonData: '' } },
  render: function () {
    return <div>
      <h1>bencoded data</h1>
      <textarea rows="8" cols="50" value={this.state.data} onChange={this.handleChange} /> 
      <h1>json data</h1>
      <textarea rows="8" cols="50" value={this.state.jsonData} disabled />
    </div>
  },
  handleChange: function (e) {
    var data = e.target.value;
    var jsonData;
    try {
      jsonData = bencode.decode(data, 'utf8')
      jsonData = JSON.stringify(jsonData, null, '    ')
    } catch (e) {
      jsonData = e.message;
    }
    this.setState({
      data: data,
      jsonData: jsonData
    })
  }
})
React.render(<App />, document.querySelector('#content'))
