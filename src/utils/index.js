import swal from "sweetalert";

/* get all blog */
export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

/* save single blog */
export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    swal({
      title: "Sorry!",
      text: "Already Bookmarked!",
      icon: "error",
    });
    return;
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  swal({
    title: "Good job!",
    text: "Bookmarked Successfully!",
    icon: "success",
  });
};

/* delete single blog */
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remainingBlog = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remainingBlog));
  swal({
    title: "Good job!",
    text: "This Blog Delete Successfully!",
    icon: "success",
  });
};
