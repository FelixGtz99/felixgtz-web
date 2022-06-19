import React from "react";
import { Text, Image, Spacer } from "@nextui-org/react";
import "../css/main_view.css";
class MainView extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <article id="header">
          <div id="container-title">
            <Text h1 size={60} id="title" weight="bold">
              Felix Jose Gutierrez Quijada
            </Text>
            <Text h2>Software Developer </Text>
          </div>
        </article>
        <article id="grid_data">
          <section>
            <Image
              src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
              objectFit="none"
              alt="Default Image"
              width={300}
              height={500}
            />
          </section>
          <section>
            <article>
              <Text h3 className="subtitle">
                About Me
              </Text>
              <Spacer y={1} />
              <p id="container-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                et, ratione maiores vero inventore neque animi repellendus,
                harum deserunt iste sequi nisi tempore culpa enim provident?
                Quisquam debitis repellendus ipsam doloremque voluptatibus!
              </p>
            </article>
            <article id="knowledge">
              <Text h3 className="subtitle">
                Knowledge
                <section id="flex-skills">

                </section>
              </Text>
              <Spacer y={1} />
            </article>
          </section>
        </article>
      </div>
    );
  }
}

export default MainView;
