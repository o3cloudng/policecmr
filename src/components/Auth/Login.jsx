import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import scrollreveal from "scrollreveal";
export default function Login() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
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
                <div className="col-md-6 bg-black-2 mx-auto mt-5">
                  <h1 className="text-center mb-5">Login</h1>
                    <form>
                        <div className="form-row mb-4">
                            <label for="inputEmail" className="text-white">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                        <div className="form-row mb-4">
                            <label for="inputPassword" className="text-white">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="form-row">
                            <label className="form-check-label text-white"><input type="checkbox" /> Remember me</label>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-warning btn-lg float-right">Login</button>
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