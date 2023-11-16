import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Button from "../Button";
import { Container, Form, FormTitle } from "./ForgotPasswordElements";
import InputFeild from "./InputFeild";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Link href="/">
        <img src="/logo-img.png" alt="" width={80} />
      </Link>
      <Form onSubmit={handleSubmit}>
        <FormTitle> Forgot Password </FormTitle>

        <InputFeild
          placeholder={"Email"}
          type="email"
          value={email}
          onChange={handleEmailChange}
          icon={<AiOutlineMail />}
          required
        />

        <Button title={"Submit"} type="submit" />
      </Form>
    </Container>
  );
};

export default ForgotPasswordForm;
