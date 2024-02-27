import { useEffect, useState } from "react";

const About = () => {
  const aboutURL = "https://www.zesty.io/-/instant/7-e93178-vqvclg.json";
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(aboutURL);
    const data = await res.json();
    const content = data.data[0].content.page_content;
    setAboutContent(content);
  };

  return (
    <div className="about-container">
      <div
        className="about-content"
        dangerouslySetInnerHTML={{ __html: aboutContent }}
      ></div>
    </div>
  );
};

export default About;
