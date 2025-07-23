import React from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Flex from "../components/Flex";
import List from "../components/List";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <section>
      <Container>
        <Flex className={"items-center  py-2"}>
          <div className="  w-3/12">
            <Logo
              src={"../src/assets/logo.png"}
              alt={"../src/assets/logo.png"}
            />
          </div>
          <div className=" w-6/12 ">
            <ul className="flex gap-12 justify-center">
              <List text="Home" />
              <List text="Pages" />
              <List text="Services" />
              <List text="Blog" />
              <List text="Contact" />
            </ul>
          </div>
          <div className=" w-3/12 flex justify-end ">
            <Button width={"198px"} height={"64px"} text={"Download CV"} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Navbar;
