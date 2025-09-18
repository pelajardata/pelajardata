import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { format } from "date-fns";

// import { Str } from '@supercharge/strings'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Blog {
  id: number;
  date_published: Date;
  author: string;
  content: string;
  title: string;
  create_at: Date;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/viewdata");
    const jsonData = await response.json();
    setBlogs(jsonData);
    return jsonData;
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(blogs);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 p-[20px]">
        <div className="col-start-2">
          {blogs.map((blog: Blog) => (
            <a href={`/blog/${blog.id}`}>
              <Card
                key={blog.id}
                className="flex flex-row grid-cols-2 h-[160px] cursor-pointer">
                <div className="flex-2 flex flex-col justify-center">
                  <CardHeader>
                    <CardTitle className="text-[20px] text-wrap">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription>
                    {/* <p className="text-[14px]">{Str(blog.content).}</p> */}
                    <span className="text-[16px]">
                      {blog.author +
                        " | " +
                        format(
                          new Date(blog.date_published).toLocaleDateString(),
                          "dd MMM, yyyy"
                        )}
                    </span>
                  </CardDescription>
                </div>
                <CardContent className="flex-1 h-auto w-fit">
                  <img
                    className="object-cover h-full w-full rounded-r-xl"
                    src={"public/test.jpg"}
                    alt="No Image"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
