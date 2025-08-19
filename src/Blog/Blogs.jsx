import { useState, useEffect } from "react";
import { Header } from "../NavBar/Header";
import { Plus } from "lucide-react";

export function Blogs() {
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("blogs");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "5 Tips for First-Time Buyers",
            desc: "Learn the essentials to make your first home purchase stress-free.",
          },
          {
            id: 2,
            title: "Top 10 Rental Hacks",
            desc: "Discover how to save money and find the best rental deals.",
          },
          {
            id: 3,
            title: "Luxury Living Guide",
            desc: "Explore the world of premium homes and high-end amenities.",
          },
        ];
  });

  const [newBlog, setNewBlog] = useState({ title: "", desc: "" });
  const [editId, setEditId] = useState(null);

  // Save to localStorage whenever blogs change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAdd = () => {
    if (!newBlog.title.trim() || !newBlog.desc.trim()) return;
    if (editId) {
      setBlogs(
        blogs.map((b) =>
          b.id === editId ? { ...b, title: newBlog.title, desc: newBlog.desc } : b
        )
      );
      setEditId(null);
    } else {
      setBlogs([...blogs, { id: Date.now(), ...newBlog }]);
    }
    setNewBlog({ title: "", desc: "" });
  };

  const handleEdit = (blog) => {
    setNewBlog({ title: blog.title, desc: blog.desc });
    setEditId(blog.id);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="w-screen min-h-screen bg-black text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-16 mb-8">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400">
            Blogs
          </span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400">{blog.desc}</p>
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-sky-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-pink-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Blog Form */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-6 h-6 text-sky-400" />{" "}
            {editId ? "Edit Blog" : "Add a Blog"}
          </h3>
          <input
            type="text"
            placeholder="Blog Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            className="w-full mb-3 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            placeholder="Blog Description"
            value={newBlog.desc}
            onChange={(e) => setNewBlog({ ...newBlog, desc: e.target.value })}
            className="w-full mb-3 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            onClick={handleAdd}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            {editId ? "Update Blog" : "Add Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
