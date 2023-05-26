import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../../Shared/Loader/Loader";
import Tabcard from "./Tabcard";

const Tablist = () => {
  const [category, setCategory] = useState("ground animal");
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);

  const handleClick = (categoryName) => {
    setCategory(categoryName);
  };

  useEffect(() => {
    fetch(`https://toy-store-server.onrender.com/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoader(false);
      });
  }, [category]);

  return (
    <div className="pt-24 text-center px-8">

      <h3 className="title mx-auto" data-aos="zoom-in" data-aos-duration="300">
        Shop By Category
      </h3>

      <h2 className="second-title" data-aos="zoom-in" data-aos-duration="350">
        Choose & Buy toys from the sort listed category.
      </h2>

      <Tabs>

        <TabList>
          <Tab onClick={() => handleClick("ground animal")}>Ground Animal</Tab>
          <Tab onClick={() => handleClick("water animal")}>Water Animal</Tab>
          <Tab onClick={() => handleClick("flying animal")}>Flying Animal</Tab>
        </TabList>

        <TabPanel className="px-4">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {/* loader  */}
            <div className={`${loader ? "" : "hidden"}`}>
              <Loader />
            </div>

            {list.map((data, index) => (
              <Tabcard key={data._id} index={index} card={data} />
            ))}
          </div>
        </TabPanel>

        <TabPanel className="px-4">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {/* loader  */}
            <div className={`${loader ? "" : "hidden"}`}>
              <Loader />
            </div>

            {list.map((data, index) => (
              <Tabcard key={data._id} index={index} card={data} />
            ))}
          </div>
        </TabPanel>

        <TabPanel className="px-4">
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {/* loader  */}
            <div className={`${loader ? "" : "hidden"}`}>
              <Loader />
            </div>

            {list.map((data, index) => (
              <Tabcard key={data._id} index={index} card={data} />
            ))}
          </div>
        </TabPanel>

      </Tabs>
      
    </div>
  );
};

export default Tablist;
