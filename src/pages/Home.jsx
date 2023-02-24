import React from "react";
import { Contianer, HomeContianer } from "../components/styled/style";
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
        <div className="container">
          <div>
            <div className="title">
              <FcAdvertising />
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>

            <p>
              consectetur adipiscing elit. Aliquam pulvinar urna efficitur
              egestas malesuada. Cras commodo vitae mi vitae rutrum. Etiam dui
              justo, dictum ac neque eget, tempor sodales tellus. Praesent
              imperdiet condimentum augue eget ornare.
            </p>
          </div>
          <div>
            <div className="title">
              <FcBriefcase />
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <p>
              consectetur adipiscing elit. Aliquam pulvinar urna efficitur
              egestas malesuada. Cras commodo vitae mi vitae rutrum. Etiam dui
              justo, dictum ac neque eget, tempor sodales tellus. Praesent
              imperdiet condimentum augue eget ornare.
            </p>
          </div>
          <div>
            <div className="title">
              <FcBrokenLink />
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <p>
              consectetur adipiscing elit. Aliquam pulvinar urna efficitur
              egestas malesuada. Cras commodo vitae mi vitae rutrum. Etiam dui
              justo, dictum ac neque eget, tempor sodales tellus. Praesent
              imperdiet condimentum augue eget ornare.
            </p>
          </div>
          <div>
            <div className="title">
              <FcAlarmClock />
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <p>
              consectetur adipiscing elit. Aliquam pulvinar urna efficitur
              egestas malesuada. Cras commodo vitae mi vitae rutrum. Etiam dui
              justo, dictum ac neque eget, tempor sodales tellus. Praesent
              imperdiet condimentum augue eget ornare.
            </p>
          </div>
        </div>
      </HomeContianer>
    </Contianer>
  );
}

export default Home;
