import React from 'react';
import ReactDOM from 'react-dom';

function Cool() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Cool Component</div>

                        <div className="card-body">I'm an Cool component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cool;

if (document.getElementById('cool')) {
    ReactDOM.render(<Cool />, document.getElementById('cool'));
}
