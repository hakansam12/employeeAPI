import React, { Fragment, useState, useEffect } from "react";

const ListEmployees = () => {

    const [employee, setEmployee] = useState([]);
    
    const getEmployees = async () => {

        try {
            const response = await fetch("http://localhost:5000/employees");
            const jsonData = await response.json();
            setEmployee(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message)  
        }
    };

    useEffect(() => {
        getEmployees();
    },[]);

    return (
    <Fragment>
      <h1 class="text-center mt-5">Employee List and Top Skills</h1>
        {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Top Skill</th>
          </tr>
        </thead>
        <tbody>
            {employee.map(employee => (
                <tr>
                    <td>{employee.employee_name}</td>
                    <td>{employee.top_skill}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
    );
};

export default ListEmployees;