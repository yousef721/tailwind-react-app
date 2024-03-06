import { useState } from "react";
import FeatureBox from "./FeatureBox";
// Icons
import AccessAnywhere from "/public/icon-access-anywhere.svg";
import Security from "/public/icon-security.svg";
import Collaboration from "/public/icon-collaboration.svg";
import AnyFile from "/public/icon-any-file.svg";

const Features = () => {
  const [items] = useState([
    {
      icon: AccessAnywhere,
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: Security,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: Collaboration,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: AnyFile,
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container ">
        <div
          className=" grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] max-w-full mx-auto"
        >
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
