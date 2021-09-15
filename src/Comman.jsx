import React from "react";
import { NavLink } from "react-router-dom";

const Comman = (props) => {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<br /><strong className="brand-name text-primary">Kurm Infotech</strong></h1>
                                    <h3 className="my-3">We are the team of telented developer making websites</h3>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnname}</NavLink>
                                    </div>
                                </div>

                                <div className="col-md-6 order-1 order-lg-2">
                                    <img src={props.imgsrc} className="img-fluid animated header_img" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Comman;