import type { Article } from "./types";

export const useArticles = () => {
  const config = useRuntimeConfig();

  const fetchAllArticles = async (): Promise<Article[]> => {
    try {
      return await $fetch<Article[]>("/qtim-test-work/posts", {
        baseURL: config.public.apiBase,
      });
    } catch (error) {
      console.error("Failed to fetch articles", error);
      throw error;
    }
  };

  const fetchArticleById = async (id: string): Promise<Article> => {
    try {
      return await $fetch(`/qtim-test-work/posts/${id}`, {
        baseURL: config.public.apiBase,
      });
    } catch (error) {
      console.error(`Failed to fetch article ${id}`, error);
      throw error;
    }
  };

  return {
    fetchAllArticles,
    fetchArticleById,
  };
};
