import React from 'react'
import Columns from './user';

class Table extends React.Component {
    render() {
      return (
        <table>
            <tbody>
          <tr>
            <Columns />
          </tr>
          </tbody>
        </table>
      );
    }
  }
export default Table;
