import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MUIDataTable from "mui-datatables";
import firebase from '../../firebaseComponents/firestore';


export default class StudentRecords extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    constructor(props) {
        super(props);
        this.state = {
            columns : [
           {
             name: "firstName",
             label: "First Name",
             options: {
               filter: true,
               sort: true,
             },
           },
           {  name: "admissionNumber",
               label: "Admission Number",
               options: {
                 filter: true,
                 sort: true,
               },
             },
             {  name: "dob",
             label: "Date Of Birth",
             options: {
               filter: true,
               sort: true,
             },
           },
           {  name: "admissionDate",
               label: "Admission Date",
               options: {
                 filter: true,
                 sort: true,
               },
             },
             {  name: "gender",
             label: "Gender",},
             {  name: "handicapped",
             label: "Handicapped",},

             {  name: "detail",
                label:"Details"}
         ],
       options :{
            //    filterType: "checkbox",
             }
           }


        console.log("loaded data")
        this.ref = firebase.firestore().collection('studentRecord');

        // get data from firestore

        this.ref.get().then(querySnapshot => {
            const dataF = querySnapshot.docs.map(doc => doc.data());
            console.log("in",dataF); // array of cities objects
            

            this.setState({data:dataF});
          });


       
    }

    check = (e) =>{
    
        console.log("pressed now",this.state)
    }
   

    render() {

        
        // console.log("inside render pressed",this.state.data);
        
        return (
            <div className="app">
                <button onClick={this.check}>Test Purpose</button>
                <div className="container">

                <MUIDataTable
                title={"Student Records"}
                data={this.state.data}
                columns={this.state.columns}
                options={this.state.options}
                />

                </div>

            </div>
        )
    }
}
