"use client";

import { useEffect, useState } from "react";

type ContentModuleName = "products" | "mediaEvents" | "blogs" | "projects" | "careers" | "dealers" | "galleries" | "brochures" | "popups";
type SupportModuleName = "enquiries" | "contact_messages" | "job_applications";
type ModuleName = ContentModuleName | SupportModuleName;

type ModuleDef = { key: ModuleName; label: string; kind: "content" | "support" };

type Item = Record<string, unknown> & { id: number; title?: string; slug?: string; status?: string; updated_at?: string };

const MODULES: ModuleDef[] = [
  { key: "products", label: "Products", kind: "content" },
  { key: "mediaEvents", label: "Media & Events", kind: "content" },
  { key: "blogs", label: "Blogs", kind: "content" },
  { key: "projects", label: "Projects", kind: "content" },
  { key: "careers", label: "Careers", kind: "content" },
  { key: "dealers", label: "Dealers", kind: "content" },
  { key: "galleries", label: "Photo/Video Gallery", kind: "content" },
  { key: "brochures", label: "Brochures", kind: "content" },
  { key: "popups", label: "Popups", kind: "content" },
  { key: "enquiries", label: "Enquiries", kind: "support" },
  { key: "contact_messages", label: "Contact Messages", kind: "support" },
  { key: "job_applications", label: "Job Applications", kind: "support" },
];

const INITIAL_FORM = { title: "", short_description: "", content: "", status: "draft", featured: false, sort_order: 0, cover_image: "", file_url: "", video_url: "" };

function endpointForSupportModule(module: SupportModuleName): string {
  if (module === "enquiries") return "/api/enquiries";
  if (module === "contact_messages") return "/api/contact-messages";
  return "/api/job-applications";
}

export default function AdminContentManager() {
  const [activeModule, setActiveModule] = useState<ModuleName>("products");
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(INITIAL_FORM);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const activeDef = MODULES.find((m) => m.key === activeModule)!;

  const fetchItems = async () => {
    setLoading(true);
    setMessage("");
    try {
      if (activeDef.kind === "support") {
        const response = await fetch(endpointForSupportModule(activeModule as SupportModuleName), { cache: "no-store" });
        const data = await response.json();
        setItems(data.data ?? []);
      } else {
        const response = await fetch(`/api/admin/content/${activeModule}?q=${encodeURIComponent(search)}`, { cache: "no-store" });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error ?? "Unable to load records.");
        setItems(data.data ?? []);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to load records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/admin/bootstrap", { method: "POST" }).finally(fetchItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModule]);

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setEditingId(null);
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeDef.kind === "support") return;

    try {
      const url = editingId ? `/api/admin/content/${activeModule}/${editingId}` : `/api/admin/content/${activeModule}`;
      const method = editingId ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sort_order: Number(form.sort_order) || 0 }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Save failed.");
      setMessage(editingId ? "Updated successfully." : "Created successfully.");
      resetForm();
      fetchItems();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Save failed.");
    }
  };

  const deleteRow = async (id: number) => {
    if (activeDef.kind === "support") return;
    if (!confirm("Delete this record?")) return;
    const response = await fetch(`/api/admin/content/${activeModule}/${id}`, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Delete failed.");
      return;
    }
    setMessage("Deleted.");
    fetchItems();
  };

  const editRow = (row: Item) => {
    if (activeDef.kind === "support") return;
    setEditingId(row.id);
    setForm({
      title: String(row.title ?? ""),
      short_description: String(row.short_description ?? ""),
      content: String(row.content ?? ""),
      status: String(row.status ?? "draft"),
      featured: Boolean(row.featured),
      sort_order: Number(row.sort_order ?? 0),
      cover_image: String(row.cover_image ?? ""),
      file_url: String(row.file_url ?? ""),
      video_url: String(row.video_url ?? ""),
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <aside className="lg:col-span-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm h-fit lg:sticky lg:top-28">
        <h2 className="font-heading text-xl mb-3">Modules</h2>
        <div className="space-y-2">
          {MODULES.map((module) => (
            <button
              key={module.key}
              onClick={() => {
                setActiveModule(module.key);
                setSearch("");
                resetForm();
              }}
              className={`w-full text-left rounded-xl px-3 py-2 text-sm font-semibold ${activeModule === module.key ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"}`}
            >
              {module.label}
            </button>
          ))}
        </div>
      </aside>

      <section className="lg:col-span-9 space-y-6">
        {activeDef.kind === "content" ? (
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-2xl mb-4">{editingId ? "Edit" : "Create"} {activeDef.label}</h3>
            <form onSubmit={submitForm} className="grid md:grid-cols-2 gap-3">
              <input required className="border rounded-lg px-3 py-2 text-sm" placeholder="Title" value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} />
              <select className="border rounded-lg px-3 py-2 text-sm" value={form.status} onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}>
                <option value="draft">Draft</option><option value="published">Published</option>
              </select>
              <textarea className="md:col-span-2 border rounded-lg px-3 py-2 text-sm min-h-20" placeholder="Short description" value={form.short_description} onChange={(e) => setForm((s) => ({ ...s, short_description: e.target.value }))} />
              <textarea className="md:col-span-2 border rounded-lg px-3 py-2 text-sm min-h-32" placeholder="Content" value={form.content} onChange={(e) => setForm((s) => ({ ...s, content: e.target.value }))} />
              <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Cover image URL" value={form.cover_image} onChange={(e) => setForm((s) => ({ ...s, cover_image: e.target.value }))} />
              <input className="border rounded-lg px-3 py-2 text-sm" placeholder="File URL (PDF/Brochure)" value={form.file_url} onChange={(e) => setForm((s) => ({ ...s, file_url: e.target.value }))} />
              <input className="border rounded-lg px-3 py-2 text-sm" placeholder="Video URL" value={form.video_url} onChange={(e) => setForm((s) => ({ ...s, video_url: e.target.value }))} />
              <input type="number" className="border rounded-lg px-3 py-2 text-sm" placeholder="Sort order" value={form.sort_order} onChange={(e) => setForm((s) => ({ ...s, sort_order: Number(e.target.value) }))} />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.featured} onChange={(e) => setForm((s) => ({ ...s, featured: e.target.checked }))} /> Featured</label>
              <div className="md:col-span-2 flex gap-2">
                <button className="rounded-lg bg-black text-white px-4 py-2 text-sm font-semibold">{editingId ? "Update" : "Create"}</button>
                {editingId ? <button type="button" onClick={resetForm} className="rounded-lg border border-gray-300 px-4 py-2 text-sm">Cancel</button> : null}
              </div>
            </form>
          </div>
        ) : null}

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="font-heading text-2xl">{activeDef.label}</h3>
            {activeDef.kind === "content" ? (
              <div className="flex gap-2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="border rounded-lg px-3 py-2 text-sm" placeholder="Search" />
                <button onClick={fetchItems} className="rounded-lg bg-gray-900 text-white px-3 py-2 text-sm">Apply</button>
              </div>
            ) : null}
          </div>

          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b text-black/60">
                  <th className="py-2 pr-3">Title / Name</th>
                  <th className="py-2 pr-3">Status</th>
                  <th className="py-2 pr-3">Updated</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr key={row.id} className="border-b last:border-b-0">
                    <td className="py-3 pr-3">
                      <div className="font-semibold">{String(row.title ?? row.name ?? `#${row.id}`)}</div>
                      {row.slug ? <div className="text-xs text-black/50">/{String(row.slug)}</div> : null}
                    </td>
                    <td className="py-3 pr-3">{String(row.status ?? "-")}</td>
                    <td className="py-3 pr-3">{row.updated_at ? new Date(String(row.updated_at)).toLocaleDateString() : "-"}</td>
                    <td className="py-3">
                      {activeDef.kind === "content" ? (
                        <div className="space-x-3">
                          <button onClick={() => editRow(row)} className="text-blue-700 font-semibold">Edit</button>
                          <button onClick={() => deleteRow(row.id)} className="text-red-700 font-semibold">Delete</button>
                        </div>
                      ) : (
                        <span className="text-xs text-black/50">Read only</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!loading && !items.length ? <p className="mt-4 text-sm text-black/50">No records found.</p> : null}
          {loading ? <p className="mt-4 text-sm text-black/50">Loading...</p> : null}
          {message ? <p className="mt-3 text-sm text-black/70">{message}</p> : null}
        </div>
      </section>
    </div>
  );
}
