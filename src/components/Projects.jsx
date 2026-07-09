import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { supabase } from "../supabaseClient";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) {
        console.error("Error fetching projects:", error.message);
      } else {
        setProjects(data);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-red-600 font-semibold text-sm tracking-wide">OUR PROJECTS</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-navy-950 mt-2">
              Featured Projects
            </h2>
            <div className="w-14 h-1 bg-green-600 mt-3 rounded-full" />
          </div>
          <a
            href="#projects"
            className="flex items-center gap-2 border border-navy-950 text-navy-950 text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-navy-950 hover:text-white transition-colors"
          >
            VIEW ALL PROJECTS
            <FaArrowRight size={12} />
          </a>
        </div>

        {loading ? (
          <p className="text-center text-ink-500">Loading projects...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-ink-500">No projects posted yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-display font-semibold text-navy-950">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-ink-500 mt-1.5">
                    <FaMapMarkerAlt size={11} className="text-red-600" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}