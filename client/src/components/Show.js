var React = require("react");

class Show extends React.Component {
  componentDidMount() {
    this.props.showDirectBook();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-centered">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.props.author}
                </h6>
                <p className="card-text">
                  {this.props.summary}
                </p>
                <div class="btn-group" role="group">
                  <button
                    className="btn btn-default"
                    onClick={this.props.editBook}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>

              <button className="btn btn-default" onClick={this.props.goBack}>
                Back
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

module.exports = Show;
