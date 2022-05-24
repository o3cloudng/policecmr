import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import scrollreveal from "scrollreveal";
// import Select from "react-select";
// import { MdApi } from "react-icons/md";
// import axios from 'axios';
import api from "../../api/Nigeria";


function Signup() {
    const [data, setData] = useState([]);
    useEffect(() => {
        api.get('/nigeriastates')
        .then(res => {
            console.log("Gettig Error:::", res.data)
            setData(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    const result = data.map((data, index) => {
        return (
            <option value="{data.state}">{data.state} </option>
        )
    }) 
    // const data = async () => {
    //     try {
    //         const response = await axios.get('/nigeriatates');
    //         setData(response.data);
    //     } catch (err){
    //         if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.header);
    //             console.log(err.response.status);
    //         } else {
    //             console.log(`Error: ${err.message}`);
    //         }
    //     }
    // }

    useEffect(() => {
        const sr = scrollreveal({
            origin: "bottom",
            distance: "100px",
            duration: 2000,
            reset: false,
        });
        sr.reveal(
            `
            .row
        `,
            {
            opacity: 0,
            interval: 100,
            }
        );
    }, []);
    return (
    <Section>
        <Navbar />
        <div className="row">
            <div className="container pt-5">
                <div className="col-md-10 bg-black-2 mx-auto mt-5">
                    <h1 className="text-center mb-5">Create Account</h1>
                    <form>
                        <div className="form-row mb-4">
                            <div className="col-md-12 d-flex">
                                <div className="col-md-6 col-sm-12">
                                    <label for="inputEmail" className="text-white">First name</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="First Name" />
                                </div>
                                <div className="col-md-6 col-sm-12 mx-2">
                                    <label for="inputEmail" className="text-white">Last name</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Last name" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row mb-4">
                            <div className="col-md-12 d-flex">
                                <div className="col-md-6 col-sm-12">
                                <label for="inputEmail" className="text-white">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                                <div className="col-md-6 col-sm-12 mx-2">
                                <label for="inputEmail" className="text-white">Phone</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Phone" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row mb-4">
                            <div className="col-md-12 d-flex">
                                <div className="col-md-6 col-sm-12">
                                    <label for="inputPassword" className="text-white">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div className="col-md-6 col-sm-12 mx-2">
                                    <label for="inputEmail" className="text-white">License Office</label>
                                    {/* <Select
                                        placeholder="License Office"
                                        name="result"
                                        options={result}
                                        value={result}
                                        onChange=''
                                        getOptionLabel={(result) => result}
                                        getOptionValue={(result) => result} 
                                    /> */}
                                    <select className="form-control">
                                        {result}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-row d-flex justify-content-between">
                            <div className="col-md-12 d-flex">
                                <div className="col-md-6 col-sm-12">
                                    <label className="form-check-label text-white"><input type="checkbox" /> Remember me</label>
                                </div>
                                <div className="col-md-6 col-sm-12 mx-2">
                                    <button type="submit" className="btn btn-warning btn-block btn-lg float-right pull-right">Login</button>
                                </div>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Section>
    );
}



const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .bg-black-2 {
    background: #2f2f2f;
    border:1px solid #6f6f6f;
    padding: 40px;
    border-radius: 10px;
    align: center;
    }
    .form-control {
        height: 60px;
        border:1px solid #fcfcfc;
    }
    .css-6j8wv5-Input {
        height: 50px;
        border:1px solid #fcfcfc;
    }
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .form-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
      color:white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Signup;