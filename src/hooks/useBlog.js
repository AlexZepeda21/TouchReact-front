import axios from "axios";
import { useEffect, useState } from "react"
import { apiRoute } from "../lib/api";

export default function useBlog() {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${apiRoute.blogs}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        });
        setBlog(response.data.data || []);
      }
      catch (err) {
        setError(err.message)
        console.log(err.message)
      }
      finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [])
  return {
    blog,
    loading,
    error
  }
}