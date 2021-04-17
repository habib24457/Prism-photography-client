import React from 'react';

const AppointmentNav = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">Prism Photography</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                    <a class="nav-link" href="/dashboard">Dashboard</a>


                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default AppointmentNav;