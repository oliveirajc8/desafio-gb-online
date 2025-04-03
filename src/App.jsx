import { useEffect, useState } from "react";
import axios from "axios";
import PostCards from "./components/PostCards";
import Filtros from "./components/SearchBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("likes");
  const [sortOrder, setSortOrder] = useState("desc");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => setPosts(response.data.posts))
      .catch((error) => console.error("Erro ao buscar os posts:", error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) &&
    (gender === "todos" || gender === "" || post.tags.includes(gender))
  );
  

  const SortedPosts = [...filteredPosts].sort((a,b) => {
    const valorA = sort === "likes" ? a.reactions.likes : a.views;
    const valorB = sort === "likes" ? b.reactions.likes : b.views;
    return sortOrder === "asc"? valorA - valorB : valorB - valorA;
  })

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-white">Desafio GB Online</h1>
      <div className="p-4 rounded-lg mb-6">
        <Filtros
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        gender={gender}
        setGender={setGender}
      />
      </div>
      <ul className="space-y-4">
        {SortedPosts.map((posts) => (
          <PostCards key={posts.id} posts={posts} />
        ))}
      </ul>
    </div>
  );
}

export default App;
