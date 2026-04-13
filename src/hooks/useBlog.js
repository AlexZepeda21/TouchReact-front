import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoute } from "../lib/api";
import { getMediaUrl } from "../lib/media";

export default function useBlog() {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(apiRoute.blogs, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        const raw = response.data?.data || [];

        const normalized = raw.map((post) => ({
          id: post?.id,
          title: post?.title ?? "",
          description: post?.description ?? "",
          date: post?.date ?? "",
          author: post?.author ?? "",
          position: post?.position ?? "",
          image: post?.image?.url ?? null,
        }));

        setBlog(normalized);
      } catch (err) {
        setError(err.message || "Error loading blog");
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return {
    blog,
    loading,
    error,
  };
}