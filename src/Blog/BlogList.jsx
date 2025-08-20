import React from 'react';

const BlogList = ({ blogs, handleEdit, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-16">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-pink-300 mb-2">
              {blog.title}
            </h3>
            <div className="text-gray-400 space-y-3">
              {Array.isArray(blog.desc) ? (
                blog.desc.map((line, idx) => <p key={idx}>{line}</p>)
              ) : (
                <p>{blog.desc}</p>
              )}
            </div>
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
  );
};

export default BlogList;