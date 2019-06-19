import React, { Component } from 'react';
import './market.css';
import image1 from './billboard.jpg';
import {
    Checkbox, Form, Row, Col, Menu, Dropdown, Button
} from 'antd';
import { HttpUtils } from '../../Services/HttpUtils';


const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group;

class Market extends Component {
    constructor(props) {
        super(props)
        this.state = {
            billboardData: [],
            filterValue: '',
            filtered: []
        }
    }

    componentDidMount() {
        this.billBoradDetails();
    }

    billBoradDetails = async () => {
        let response = await HttpUtils.get('getbillboard');
        console.log(response, 'response');
        let data = response.content;
        console.log(data , 'data')
        // for (var i = 0; i < data.length; i++) {
        //     let billboardArr = [];
        //     let array = [];
        //     let billboardObj = data[i]
        //     for (var j in billboardObj) {
        //         let da = billboardObj[j]
        //         for (var k = 0; k < da.length; k++) {
        //             billboardArr.push(da[k])
        //         }
        //         if (j == 'companyId') {
        //             let ab = billboardArr.slice(0, 21)
        //             array.push(ab)
        //             let companyId = billboardObj["companyId"]
        //             let companyName = billboardObj["companyName"]
        //             let _id = billboardObj["_id"]
        //             array.push(companyId, companyName, _id)
        //         }
        //     }
        //     console.log(array)
        // }
        // this.setState({
        //     billboardData: arr
        // })
    }

    filterBillBoard(filter) {
        console.log(filter, 'filter Value')
        this.handleFiltration(filter)
    }
    handleFiltration = (value) => {
        const { billboardData } = this.state;
        let filterValues = [];
        let filtered = [];
        for (var i = 0; i < billboardData.length; i++) {
            let data = billboardData[i]
            // console.log(data, 'data')
            for (var j in data) {
                // console.log(data[j])
                filterValues.push(data[j])
            }
            for (var k = 0; k < value.length; k++) {
                if (filterValues.indexOf(value[k])) {
                    let filter = value[k]
                    // console.log(data[filter] , "data")
                    let filtered = data.filter((elem) => elem.filter.includes("Front Facing"))
                    console.log(filtered, 'filtered')
                    // filtered.push(value[k])
                    // for(var l in data){
                    //     let d = data[l]
                    //     console.log(d,';;;;;;;;')
                    // }
                    // this.setState({ filtered }, () => {
                    //     this.filteringData();
                    // });
                }
            }
        }
        // console.log(filterValues , 'filterValues')

        // var obj = billboardData.map(function (billboard) {
        //     for (var i = 0; i < billboard.length; i++) {
        //         console.log(billboard[i], 'billboard')
        //     }
        //     return billboard
        // });
        // console.log(obj)
        // let val = value
        // let fieldValue = [];
        // let filter = []
        // // console.log(billboardData, 'billboardData')
        // for (var i = 0; i < billboardData.length; i++) {
        //     let data = billboardData[i]
        //     for (var j in data) {
        // let d = data[j]
        // for(var k=0 ; k<d.length; k++){
        //     fieldValue.push(d[k])
        // }
        // console.log(data[j], 'data[j]')
        // if (val !== undefined) {
        //     if (val.includes(data[j])) {
        //         fieldValue.push(val);
        //         // let filtered = val.filter((elem) => elem !== data[j]);
        //         // console.log(filtered , 'filtered')
        //         // if (data.companyName === data.companyName) {
        //         //     console.log(data[j], '............');
        //         // }
        //         // this.setState({
        //         //     billboardData: data
        //         // })
        //     }
        //     }
        // }
        // console.log(fieldValue, 'fieldValue')
        // if (val !== undefined) {
        //     console.log('.........')
        //     if (val.includes(fieldValue)) {
        //         console.log(';;;;;;;;;;;')
        //         filter.push(val);
        //     }
        //     // this.setState({ filtered }, () => {
        //     // 	this.filteringData();
        //     // });
        //     // for (var j in data) {
        //     // }
        //     console.log(filter, 'data')
        // }

    }
    // handleConditions(filtered, filter, item){
    // 	if(filtered.includes(filter)){
    // 		filtered = filtered.filter((elem) => elem !== filter);
    // 		// console.log(item , 'item')
    // 		// console.log(filter , 'filter')
    // 		// console.log(filtered , 'filtered in the if')
    // 	}
    // 	filtered.push(item);
    // 	this.setState({ filtered }, () => {
    // 		this.filteringData();
    // 	});
    // 	console.log(filtered , 'filtered outside the if')
    // }


    filteringData() {
        const { billboardData, filtered } = this.state;
        if (filtered.length === 0) {
            this.setState({ billboardData: billboardData });
        } else {
            let data = billboardData;
            // data = !!filtered.length ? arr.filter((elem) => filtered.includes(elem.bodyType)) : data;
            // data = !!weather.length ? data.filter((elem) => filtered.includes(elem.weather)) : data;
            // data = !!size.length ? data.filter((elem) => filtered.some(r => elem.sizes.includes(r))) : data;
            this.setState({ billboardData });
            // console.log(billboardData)
        }
    }


    render() {
        const { billboardData } = this.state;
        console.log(billboardData, 'billboardData')
        return (
            <div>
                <div className='row billboard'>
                    <div className='col-md-3'>Filters</div>
                    <div className='col-md-9'>Billboards</div>
                </div>
                <div className='row filter'>
                    <div className='col-md-3'>
                        <CheckboxGroup
                            setFieldsValue={this.state.filterValue}
                            onChange={this.filterBillBoard.bind(this)}
                        >
                            {/* <div className='filterDivs'>Billboard Facing</div>
                            <Row>
                                <Col >
                                    <Checkbox value="audianceType">Audiance Type</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="status">Status</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="traffic">Traffic</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="Facing">Facing</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="lightning">Lightning</Checkbox>
                                </Col>
                            </Row> */}
                            {/* <div className='filterDivs'>Size</div>
                            <Row>
                                <Col >
                                    <Checkbox value="size">Size</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="width">Width</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="height">Height</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="type">Type </Checkbox>
                                </Col>
                            </Row> */}
                            {/* <Row>
                            </Row> */}
                            <Row>
                                <div className='filterDivs'>Facing</div>
                                {/* <Col >
                                    <Checkbox value="latitude">Latitude</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="longitude">Longitude</Checkbox>
                                </Col> 
                                <Col >
                                    <Checkbox value="address">Address</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="nearBy">Near By</Checkbox>
                                </Col>*/}
                                <Col >
                                    <Checkbox value="Front Facing">Front Facing</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="back">Back Facing</Checkbox>
                                </Col>
                                <Col >
                                    {/* <Checkbox value="city">City</Checkbox> */}
                                    {/* <Dropdown overlay={menu} placement="City">
                                        <Button>City</Button>
                                    </Dropdown> */}
                                </Col>
                                {/* <Col >
                                    <Checkbox value="state">State</Checkbox>
                                </Col> */}
                                {/* <Col >
                                    <Checkbox value="country">Country</Checkbox>
                                </Col> */}
                            </Row>
                            {/* <div className='filterDivs'>Billboard Rates</div>
                            <Row>
                                <Col >
                                    <Checkbox value="dailyRate">1</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="weeklyRate">Weekly Rate</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="monthlyRate">Monthly Rate</Checkbox>
                                </Col>
                                <Col >
                                    <Checkbox value="yearlyRate">Yearly Rate</Checkbox>
                                </Col>
                            </Row> */}
                        </CheckboxGroup>
                    </div>
                    <div className='col-md-9'>
                        {/* rendering the billboard data on front end */}
                        <div className='row '>
                            {billboardData && billboardData.map((elem, key) => {
                                console.log(elem, elem)
                                return (
                                    <div className='col-md-3'>
                                        {/* <img src={elem.billBoardImgs[0]} className='imgBillBoard' alt={key} /> */}
                                        <p>{elem.companyName}</p>
                                        {/* <p>{elem.city[0][0]}</p> */}
                                    </div>
                                )
                            })}
                        </div>
                        {/* <div className='row '>
                            <div className='col-md-3'>
                                <img src={image1} className='imgBillBoard' />
                                <p>Billboards</p>
                                <p>Billboards</p>
                            </div>
                            <div className='col-md-3'>
                                <img src={image1} className='imgBillBoard' />
                                <p>Billboards</p>
                                <p>Billboards</p>
                            </div>
                            <div className='col-md-3'>
                                <img src={image1} className='imgBillBoard' />
                                <p>Billboards</p>
                                <p>Billboards</p>
                            </div>
                            <div className='col-md-3'>
                                <img src={image1} className='imgBillBoard' />
                                <p>Billboards</p>
                                <p>Billboards</p>
                            </div>
                        </div> */}

                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Market;