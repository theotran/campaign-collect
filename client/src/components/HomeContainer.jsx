import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PrintingTable from './PrintingTable';

class HomeContainer extends Component {
  state = {
    printingData: null
  }

  componentDidMount() {
    // amount paid for hawaii printing in 2014 in decending order
    fetch('https://api.open.fec.gov/v1/schedules/schedule_b/?disbursement_description=printing&per_page=100&two_year_transaction_period=2014&recipient_state=HI&api_key=nepbcoj4JZr4ldiuDvw9Yy7ACgOVizWwehGDnzkX&sort=-disbursement_amount').then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({printingData: data.results});
    });
  }

  render() {
    return (
      <div>
        <Container>
          <PrintingTable printingData={this.state.printingData} />
        </Container>
      </div>
    )
  }
}

export default HomeContainer;
