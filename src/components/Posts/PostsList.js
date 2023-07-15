import PostUser from "./PostUser";
import ResponseButtons from "./ResponseButtons";
import { useSelector } from "react-redux";
import { selectAllBlogs } from "./PostsSlice";



const PostsList = () => {
  const blogs = useSelector(selectAllBlogs);

  const renderedBlogs = blogs.map((blog) => (
    <div key={blog.id} className="card">
      <div className="card-body">
        <h3>{blog.title}</h3>
        <p>{blog.body.substring(0, 100)}</p>
        <p className="lead">
          <PostUser userId={blog.userId} />
        </p>
        <ResponseButtons />
      </div>
    </div>
  ));

  return (
    <section>
      <h2>Blogs</h2>
      {renderedBlogs}
    </section>
  );
};

export default PostsList;
