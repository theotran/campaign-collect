import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class PrintingTable extends Component {
  state = {
    printingArr: []
  }

  componentWillReceiveProps(props){
    this.setState({printingArr: props.printingData});
  }

  render() {
    // console.log('PRINTING PROPS', this.props);
    // console.log('PRINTING STATE', this.state);
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Treasurer</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.printingArr.map((transaction) => {
              // console.log('inside map', transaction);
              return(
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{transaction.committee.name}</Label>
                  </Table.Cell>
                  <Table.Cell>
                    <Label ribbon>{transaction.committee.treasurer_name}</Label>
                  </Table.Cell>
                  <Table.Cell>
                    <Label ribbon>{transaction.disbursement_description}</Label>
                  </Table.Cell>
                  <Table.Cell>
                    <Label ribbon>${transaction.disbursement_amount}</Label>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

export default PrintingTable;
