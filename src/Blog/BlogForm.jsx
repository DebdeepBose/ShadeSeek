import React from 'react';
import { Plus } from "lucide-react";

const BlogForm = ({ newBlog, setNewBlog, handleAdd, editId }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg mt-12">
      <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Plus className="w-6 h-6 text-sky-400" />
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
  );
};

export default BlogForm;