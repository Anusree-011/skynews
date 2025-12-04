const NEWS_API_KEY = 'ee7eca087df0fd6adf5c48589255a428';
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';
const SEARCH_URL = 'https://gnews.io/api/v4/search';

export const fetchRegionalNews = async (country = 'in') => {
  try {
    const response = await fetch(`${BASE_URL}?country=${country}&apikey=${NEWS_API_KEY}`);
    const data = await response.json();
    
    if (data.articles) {
      return data.articles.map((article, index) => ({
        id: index + 1,
        title: article.title,
        description: article.description,
        urlToImage: article.image || 'https://picsum.photos/200/140',
        url: article.url,
      }));
    }
    
    throw new Error('Failed to fetch news');
  } catch (error) {
    console.error('GNews API error:', error);
    // Return sample data if API fails
    return [
      {
        id: 1,
        title: "Sample News Title One",
        description: "This is a sample description. API failed, showing fallback data.",
        urlToImage: "https://picsum.photos/200/140",
        url: "https://example.com/news1",
      },
      {
        id: 2,
        title: "Sample News Title Two", 
        description: "Another sample description for fallback data.",
        urlToImage: "https://picsum.photos/200/141",
        url: "https://example.com/news2",
      },
    ];
  }
};

export const searchNews = async (query) => {
  try {
    const response = await fetch(`${SEARCH_URL}?q=${encodeURIComponent(query)}&apikey=${NEWS_API_KEY}`);
    const data = await response.json();
    
    if (data.articles) {
      return data.articles.map((article, index) => ({
        id: index + 1,
        title: article.title,
        description: article.description,
        urlToImage: article.image || 'https://picsum.photos/200/140',
        url: article.url,
      }));
    }
    
    return [];
  } catch (error) {
    console.error('GNews search error:', error);
    return [];
  }
};