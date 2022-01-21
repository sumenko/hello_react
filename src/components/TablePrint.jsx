import React from 'react';


const TablePrint = ({head, data}) => {
    return (
        <table border="1">
            <td style={{textAlign: 'center'}}>#</td>
            {head.map(
                    (head) => 
                    <th>{head}</th>
            ) }
            {data.map(
                    (line, row) =>
                    <tr>
                        <td>{row+1}</td>
                        {line.map((cell, index) =>
                            index===0?
                            <td style={{textAlign: 'left'}} >{cell}</td>   
                            :
                            <td style={{textAlign: 'center'}} >{cell}</td>   
                        )

                    }
                    </tr>      
            ) }
        </table>
    )
}

export default TablePrint;
