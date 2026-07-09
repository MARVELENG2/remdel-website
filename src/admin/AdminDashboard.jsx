import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const CATEGORIES = [
  "Land Survey",
  "Estate Surveyor",
  "Layout Design & Setting Out",
  "Road Construction",
  "Building Construction",
  "Boreholes Drilling and Servicing",
  "Structural Design",
  "Electrical and Mechanical Plan",
  "Property Management",
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    checkAuth();
    fetchProjects();
  }, []);

  async function checkAuth() {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      navigate("/admin");
    }
  }

  async function fetchProjects() {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setProjects(data);
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin");
  }

  function resetForm() {
    setTitle("");
    setLocation("");
    setCategory(CATEGORIES[0]);
    setImageFile(null);
    setEditingId(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = null;

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("project-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      if (editingId) {
        const updateData = { title, location, category };
        if (imageUrl) updateData.image_url = imageUrl;

        const { error } = await supabase
          .from("projects")
          .update(updateData)
          .eq("id", editingId);

        if (error) throw error;
      } else {
        if (!imageUrl) {
          alert("Please select an image.");
          setUploading(false);
          return;
        }

        const { error } = await supabase.from("projects").insert({
          title,
          location,
          category,
          image_url: imageUrl,
        });

        if (error) throw error;
      }

      resetForm();
      fetchProjects();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setUploading(false);
    }
  }

  function handleEdit(project) {
    setEditingId(project.id);
    setTitle(project.title);
    setLocation(project.location);
    setCategory(project.category);
    setImageFile(null);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this project?")) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      alert("Error deleting: " + error.message);
    } else {
      fetchProjects();
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="font-display font-bold text-lg">REMDEL Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition-colors"
        >
          Log Out
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="font-display font-semibold text-navy-950 mb-4">
            {editingId ? "Edit Project" : "Add New Project"}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border border-black/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
            <input
              type="text"
              placeholder="Location (e.g. Ado Ekiti, Ekiti State)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="border border-black/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-black/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="text-sm"
              {...(!editingId && { required: true })}
            />

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={uploading}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-3 rounded-md transition-colors disabled:opacity-60"
              >
                {uploading ? "Saving..." : editingId ? "Update Project" : "Add Project"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-3 border border-black/10 rounded-md text-sm text-ink-700 hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Project list */}
        <div>
          <h2 className="font-display font-semibold text-navy-950 mb-4">
            Existing Projects ({projects.length})
          </h2>

          {loading ? (
            <p className="text-ink-500 text-sm">Loading...</p>
          ) : (
            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-sm p-3 flex items-center gap-3"
                >
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-navy-950">{project.title}</p>
                    <p className="text-xs text-ink-500">{project.location}</p>
                    <p className="text-xs text-red-600">{project.category}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-xs text-navy-950 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-xs text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}