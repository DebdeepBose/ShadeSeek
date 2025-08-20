import { useState } from "react";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

export function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "3 Tips for First-Time Buyers",
      desc: [
        "Buying your first home is exciting, but it can also feel overwhelming. Between mortgages, inspections, and contracts, it's easy to miss important details. Here are five practical tips to help you make the process smoother and less stressful:",
        " 1. Get Pre-Approved Early - Before you even start looking at houses, talk to your bank or lender. Getting pre-approved gives you a clear budget and shows sellers that you're serious. This can make your offer stand out in competitive markets.",
        " 2. Prioritize Location Over Features - You can always upgrade a kitchen or repaint the walls, but you can't change the neighborhood. Think about commute time, schools, safety, and future growth of the area before making a decision.",
        " 3. Don't Skip the Home Inspection - It might feel like an extra cost, but a proper inspection can save you thousands later. Inspectors can uncover hidden issues like plumbing leaks, foundation cracks, or outdated wiring that you might miss.",
      ],
    },
    {
      id: 2,
      title: "3 Rental Hacks to Save Money",
      desc: [
        "1. Negotiate Rent - Many landlords are open to negotiation, especially if you have a good rental history or can pay a few months in advance. Always ask politely if the rent is flexible.",
        "2. Look Beyond Popular Platforms - Listings on big rental apps go fast. Check local Facebook groups, community boards, or word-of-mouth leads to find hidden deals.",
        "3. Move During the Off-Season - Rents often drop during winter or less popular moving months. If you’re flexible, shifting your move date could save you big.",
      ],
    },
    {
      id: 3,
      title: "Luxury Living Guide",
      desc: [
        "1. Prime Locations — Luxury homes are often in prestigious neighborhoods with easy access to business hubs, fine dining, and cultural hotspots.",
        "2. High-End Interiors — Expect designer kitchens, spa-like bathrooms, and premium finishes like marble, hardwood, and smart lighting.",
        "3. World-Class Amenities — Many premium properties include gyms, pools, concierge services, and private lounges tailored to residents’ comfort.",
      ],
    },
  ]);

  const [newBlog, setNewBlog] = useState({ title: "", desc: "" });
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!newBlog.title.trim() || !newBlog.desc.trim()) {
      return;
    }
    if (editId) {
      setBlogs(
        blogs.map((b) =>
          b.id === editId
            ? { ...b, title: newBlog.title, desc: newBlog.desc }
            : b
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
    <div className="w-screen min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative h-[100vh] flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>

<div className="absolute top-1/2 right-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>


        <h2 className="text-5xl brightness-125 md:text-7xl font-extrabold mb-2">
          <span className="text-white">Blogs</span>
        </h2>
        <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-150">
          Share Your Journey Of Home Hunting
        </h3>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <BlogList
          blogs={blogs}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <BlogForm
          newBlog={newBlog}
          setNewBlog={setNewBlog}
          handleAdd={handleAdd}
          editId={editId}
        />
      </div>
    </div>
  );
}
