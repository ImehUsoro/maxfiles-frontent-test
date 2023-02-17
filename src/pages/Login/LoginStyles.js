import styled from "styled-components";

export const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  a {
    text-decoration: none;
  }

  input:-webkit-autofill {
    transition: background-color 1s 5000s;
  }

  input {
    outline: none;
  }

  .left-section {
    width: 38.194%;
    background-image: url("/images/login-bg.png");
    background-size: cover;
  }
  .right-section {
    width: 55%;
    padding-top: 12.5rem;
    padding-left: 6.25%;
  }

  .welcome-text {
    font-weight: 800;
    font-size: 2.25rem;
    margin-bottom: 0.625rem;
    color: #222222;
  }

  .subtext {
    color: #757575;
    font-size: 1.125rem;
    margin-bottom: 3.125rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 71.5%;
  }

  .input {
    font-size: 1.125rem;
  }

  .error {
    color: red;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .password-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 1.875rem; */
    margin-top: 1.25rem;
    background-color: #f1ebe2;
    border-radius: 0.625rem;
    padding: 0.875rem 1.25rem 0.875rem 2.5rem;
    border: 1px solid #d1943966;
  }

  .email-input {
    border: 1px solid #d1943966;
    border-radius: 0.625rem;
    color: black;
    background-color: #f1ebe2;
    padding: 0.875rem 1.875rem 0.875rem 2.5rem;
  }

  .password-input {
    border: none;
    width: 100%;
    background-color: #f1ebe2;
  }

  .password-input-container img {
    align-self: center;
  }

  .view-password-image-container {
    cursor: pointer;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
    margin-top: 1.875rem;
  }

  .checkbox-container input {
    margin: 0;
  }

  .checkbox-container p {
    color: #222222;
  }

  .sign-in-container {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.875rem;
  }

  .sign-in-btn {
    background-color: #d19439;
    padding: 0 2.59375rem;
    line-height: 3.125rem;
    color: #f5f5f5;
    border-radius: 0.9375rem;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.25rem;
    transition: all 0.2s ease-in-out;
  }

  .sign-in-btn:hover {
    background-color: #bc8533;
    transform: scale(1.05);
  }

  .sign-in-btn:active {
    background-color: #bc8533;
    transform: scale(1);
  }

  .google-sign-in {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .google-sign-in p {
    color: #757575;
  }

  .google-image-container {
    width: 2.8125rem;
    height: 2.8125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 0.625rem;
  }
  .create-account {
    font-size: 1.125rem;
    align-self: center;
    text-align: center;
  }
  .sign-up {
    font-family: "Proxima Nova", sans-serif;
    font-weight: 600;
    color: #d19439;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .sign-up:hover {
    color: #bc8533;
  }

  @media only screen and (max-width: 815px) {
    .left-section {
      display: none;
    }
    .right-section {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 488px) {
    .sign-in-container {
      flex-direction: column;
      align-items: center;
    }
    .sign-in-btn {
      width: 100%;
    }
  }

  @media only screen and (max-width: 350px) {
    .welcome-text {
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;
