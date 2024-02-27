import { useEffect, useState } from "react";

const Home = () => {
  const homeURL = "https://www.zesty.io/-/gql/platform_section.json";
  const [homeContent, setHomeContent] = useState([]);

  useEffect(() => {
    const getHomeContent = async () => {
      const contentFromURL = await fetchContent();
      setHomeContent(contentFromURL);
    };
    getHomeContent();
  });

  const fetchContent = async () => {
    const res = await fetch(homeURL);
    const data = await res.json();

    return data;
  };

  return (
    <div className="home-container">
      {homeContent.map((item) => (
        <div className="home-content" key={item.title}>
          <h1 className="title">{item.title}</h1>
          <div
            className="text-content"
            dangerouslySetInnerHTML={{ __html: item.text_content }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Home;
