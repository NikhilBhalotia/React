// src/pages/Post.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    async function load() {
      try {
        if (!slug) return;
        const p = await appwriteService.getPost(slug);
        console.log("🔎 loaded post:", p);
        if (p) setPost(p);
        else navigate("/");
      } catch (err) {
        console.error("Error loading post:", err);
        navigate("/");
      }
    }
    load();
  }, [slug, navigate]);

  const deletePost = async () => {
    if (!post) return;
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const ok = await appwriteService.deletePost(post.$id);
      if (ok) navigate("/");
    } catch (err) {
      console.error("Error deleting post:", err);
      alert("Delete failed — check console for details.");
    }
  };

  if (!post) {
    return (
      <div className="py-8">
        <Container>
          <p>Loading...</p>
        </Container>
      </div>
    );
  }

  // Support both string fileId and object { $id: ... }
  const fileId =
    typeof post.featuredImage === "string"
      ? post.featuredImage
      : post.featuredImage?.$id;

  const imageUrl = fileId ? appwriteService.getFileView(fileId) : null;

  // Prepare content: handle cases where content may be HTML, or escaped HTML (&lt;p&gt;...)
  const rawContent =
    typeof post.content === "string"
      ? post.content
      : String(post.content || "");

  // Try to decode HTML entities if the content is escaped
  const decodeHtmlEntities = (html) => {
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.documentElement.textContent || html;
    } catch (e) {
      return html;
    }
  };

  const decoded = decodeHtmlEntities(rawContent);

  // Sanitize the decoded HTML (keeps valid HTML but strips dangerous stuff)
  const sanitized = DOMPurify.sanitize(decoded);

  console.log("🧾 post.content (decoded):", decoded.slice(0, 300));
  console.log("🔐 sanitized snippet:", sanitized.slice(0, 300));
  console.log("📎 imageUrl:", imageUrl);

  return (
    <div className="py-8">
      <Container>
        <h1 className="mb-4 text-3xl font-bold">{post.title || "Untitled"}</h1>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title || "featured image"}
            className="object-cover w-full mb-6 rounded-xl"
          />
        )}

        {/* Render sanitized HTML */}
        {sanitized ? (
          <div
            className="mb-6 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitized }}
          />
        ) : (
          <p className="mb-6 text-lg">{post.content}</p>
        )}

        {/* Edit/Delete shown only to owner */}
        {userData && userData.$id === post.userId && (
          <div className="flex gap-4 mt-6">
            <Button onClick={() => navigate(`/edit-post/${post.$id}`)}>
              Edit
            </Button>
            <Button
              onClick={deletePost}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Post;
