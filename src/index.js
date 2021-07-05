import ReactDOM from "react-dom";
import React from "react"

ReactDOM.render(
    <main>
        <h1>Hello intocode</h1>
        <p>lorem ipsum dolor sit</p>
        <div className='block'>
            <ul className="menu">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
            </ul>
        </div>
        <div>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KjZ5hYj0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/zxyj7uvp4mfv4s6wybq7.png"/>
        </div>
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Humans in intocode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alvi</td>
                        <td>Prepod</td>
                    </tr>
                    <tr>
                        <td>Jambo</td>
                        <td>Student</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
, document.getElementById('root'))