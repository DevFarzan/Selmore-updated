import React, { Component } from 'react';
import './carts.css';

class CartPanel1 extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '3vw' }}>
                    <div className="row" style={{ margin: '0px' }}>
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active tablee_Navtab" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><span className="doesit10">Regular</span></a>
                                    <a className="nav-item nav-link tablee_Navtab" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><span className="doesit10">Mega Sale</span></a>
                                    <a className="nav-item nav-link tablee_Navtab" id="nav-bid-tab" data-toggle="tab" href="#nav-bid" role="tab" aria-controls="nav-bid" aria-selected="false"><span className="doesit10">Bidding</span></a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row" style={{ margin: '0px' }}>
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 userDataPlace">
                            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                <div className="tab-pane fade show active text-justify" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <table class="table" style={{ textAlign: 'center' }}>
                                        <thead className="tablee_Head">
                                            <tr>
                                                <th>#</th>
                                                <th>Company name</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Booked days</th>
                                                <th>Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tablee_th">0</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_th">10</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                            <tr>
                                                <td className="tablee_th">1</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_th">10</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <table class="table" style={{ textAlign: 'center' }}>
                                        <thead className="tablee_Head">
                                            <tr>
                                                <th>#</th>
                                                <th>Company name</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Booked days</th>
                                                <th>Sale Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tablee_th">0</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_th">10</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                            <tr>
                                                <td className="tablee_th">1</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_th">10</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="nav-bid" role="tabpanel" aria-labelledby="nav-bid-tab">
                                    <table class="table" style={{ textAlign: 'center' }}>
                                        <thead className="tablee_Head">
                                            <tr>
                                                <th>#</th>
                                                <th>Company name</th>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Bid Amount</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tablee_th">0</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                            <tr>
                                                <td className="tablee_th">1</td>
                                                <td className="tablee_td">Devan Motors</td>
                                                <td className="tablee_td">devan motor front shahrah e faisal</td>
                                                <td className="tablee_td">Karachi</td>
                                                <td className="tablee_td">Sindh</td>
                                                <td className="tablee_td">$2500</td>
                                                <td className="tablee_td">View</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CartPanel1;