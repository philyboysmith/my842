import React from 'react';

export default class AnnualReview extends React.Component {

  constructor(props) {
      super(props);
      this.showNotes = this.showNotes.bind(this);
      this.approve = this.approve.bind(this);
      this.state = { annualReviewData: [] };
  }
  showNotes() {
        this.refs.notes.classList.toggle('hidden');
        this.refs.textarea.focus();
    }

    approve() {
        this.refs.approveButton.classList.toggle('approved');
        console.log('Testing console');
    }

  componentDidMount() {
        this.refs.removeButton.addEventListener('click', this.showNotes);
        this.refs.approveButton.addEventListener('click', this.approve);
        this.props.fetchAnnualReview(this.props.params.clientID)
          .then((annualReviewData) => this.setState({ annualReviewData: annualReviewData.response }))
          .catch(error => console.error(error.message));
    }

    componentWillUnmount() {
        this.refs.removeButton.removeEventListener('click', this.showNotes);

        this.refs.approveButton.removeEventListener('click', this.approve);
    }



	render() {

      return (

          <div>
            <div>
              <h1>Assets and Liability Statement</h1>
              <div>
                <p>{console.log(this.state.annualReviewData)}</p>
                <h2>Properties</h2>
                <ul className="al_list">
                  <li className="al_list__item">
                    <div>
                      <h3>17 The Meadway</h3>
                      <p>Main residence (UK)</p>
                      <p><strong>£1,000,000</strong></p>
                    </div>
                    <div ref="notes" className="al_list__input hidden">
                      <textarea ref="textarea" rows="5" className="input-transparent form-control" placeholder="Please detail what changes need to be made"></textarea>
                    </div>
                    <div className="al_list__actions">
                      <div ref="approveButton">
                        <i className="glyphicon glyphicon-ok"></i> Approved
                      </div>
                      <div ref="removeButton">
                        <i className="glyphicon glyphicon-remove"></i> Requires revision
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Pensions</h2>
                <ul className="al_list">
                  <li className="al_list__item">
                    <div>
                      <h3>Trans Oceanic Meat Co Pension Scheme</h3>
                      <p>Small-Self Administered Scheme</p>
                      <p><strong>£5,491,786</strong></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Income</h2>
                <ul className="al_list">
                  <li className="al_list__item">
                    <div>
                      <h3>Business income</h3>
                      <p><strong>£10,000,000</strong></p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Liquid Assets</h2>
                <ul className="al_list">
                  <li className="al_list__item">
                    <div>
                      <h3>Charles Stanley</h3>
                      <p>General Investment Account</p>
                      <p><strong>£2,000,000</strong></p>
                    </div>
                  </li>
                  <li className="al_list__item">
                    <div>
                      <h3>Charles Stanley</h3>
                      <p>General Investment Account</p>
                      <p><strong>£2,000,000</strong></p>
                    </div>
                  </li>
                  <li className="al_list__item">
                    <div>
                      <h3>Charles Stanley</h3>
                      <p>General Investment Account</p>
                      <p><strong>£2,000,000</strong></p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2>Current Accounts</h2>
                <ul className="al_list">
                  <li className="al_list__item">
                    <div>
                      <h3>Coutts</h3>
                      <p>Current account</p>
                      <p><strong>£2,000,000</strong></p>
                    </div>
                  </li>
                  <li className="al_list__item">
                    <div>
                      <h3>HSBC Savings Account</h3>
                      <p><strong>£1,000,000</strong></p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            <div>
              <h1>Family tree</h1>
            </div>

            <div>
              <h1>Budget planner</h1>
            </div>

            <div>
              <h1>Risk profile</h1>
            </div>

            <div>
              <h1>Availability</h1>
            </div>

          </div>

        );
	}
}
