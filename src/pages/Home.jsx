import React from "react";
import {
  BtnHome,
  Contianer,
  HomeContianer,
  Section,
} from "../components/styled/style";
import {
  FcAdvertising,
  FcBriefcase,
  FcBrokenLink,
  FcAlarmClock,
} from "react-icons/fc";

function Home() {
  return (
    <Contianer>
      <HomeContianer>
        <Section>
          <div className="text">
            <div className="title">
              {/* <FcAlarmClock /> */}
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <p>
              consectetur adipiscing elit. Aliquam pulvinar urna efficitur
              egestas malesuada. Cras commodo vitae mi vitae rutrum. Etiam dui
              justo, dictum ac neque eget, tempor sodales tellus. Praesent
              imperdiet condimentum augue eget ornare consectetur adipiscing
              elit. Aliquam pulvinar urna efficitur egestas malesuada. Cras
              commodo vitae mi vitae rutrum. Etiam dui justo, dictum ac neque
              eget, tempor sodales tellus. Praesent imperdiet condimentum augue
              eget ornare.
            </p>
            <BtnHome bg={"white"}>Discover</BtnHome>
          </div>
          <div className="img">
            <img
              src="https://obelisk.themescamp.com/demo1/wp-content/uploads/sites/2/2021/09/001.jpg"
              alt="cats"
              srcset=""
            />
          </div>
        </Section>
      </HomeContianer>
    </Contianer>
  );
}

export default Home;
