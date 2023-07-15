import { useState } from "react";
import CardComponent from "../../Components/CardComponent.jsx";

const Index = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1 className="font-bold mb-5">{blog.title}</h1>
          <h4>{blog.body}</h4>
        </div>
      ))}
      <CardComponent />
    </div>
  );
};

export default Index;
