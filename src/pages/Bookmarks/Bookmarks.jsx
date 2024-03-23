import {useEffect, useState} from "react";
import {deleteBlog, getBlogs} from "../../utils";
import BlogCard from "../../components/BlogCard/BlogCard";
import EmptyState from "../../components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1) {
    return (
      <EmptyState
        massage="No Bookmark Available!"
        address={"/blogs"}
        label={"GoTo Blogs"}
      ></EmptyState>
    );
  }
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12 py-10 justify-center">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
