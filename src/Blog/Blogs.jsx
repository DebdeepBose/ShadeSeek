import { useState} from "react";
import { Plus } from "lucide-react";

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
<div className="absolute 
  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 
  bg-blue-600 rounded-full blur-3xl opacity-50 mix-blend-screen 
  top-16 -left-10 
  md:top-24 md:-left-5 
  lg:-top-1 lg:left-64">
</div>

<div className="absolute 
  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 
  bg-pink-600 rounded-full blur-3xl opacity-50 mix-blend-screen 
  top-80 -right-10 
  md:top-64 md:-right-5 
  lg:top-60 lg:right-64">
</div>

   
   {/* Blog and subtext section with full height and centering */}
   <div className="relative h-[100vh] flex flex-col items-center justify-center text-center">
    <h2 className="text-5xl brightness-125 md:text-7xl font-extrabold mb-2">
     <span className="text-white">
      Blogs
     </span>
    </h2>
    <h3 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-150">
     Share Your Journey Of Home Hunting
    </h3>
   </div>
   
   {/* The rest of the content (blog list and form) */}
   <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-16">
     {blogs.map((blog) => (
      <div
       key={blog.id}
       className="p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg flex flex-col justify-between"
      >
       <div>
        <h3 className="text-xl font-bold text-pink-300 mb-2">{blog.title}</h3>
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
   </div>
  </div>
 );
}