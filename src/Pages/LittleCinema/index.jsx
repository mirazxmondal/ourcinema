import { useEffect, useState } from "react";
import supabase from "../../supabase.js";

const Index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("LittleCinema").select("*");
        if (error) {
          throw error;
        }
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h1 className="font-bold mb-5">{blog.title}</h1>
          <h4>{blog.body}</h4>
        </div>
      ))}
    </div>
  );
};

export default Index;
