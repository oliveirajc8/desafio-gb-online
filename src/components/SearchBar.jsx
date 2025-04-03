import { motion } from "framer-motion";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

function Filtros({
  search,
  setSearch,
  gender,
  setGender,
  sort,
  setSort,
  sortOrder,
  setSortOrder,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-4 bg-[#2c2f2e] p-4 rounded-lg shadow-md"
    >
      <Input
        type="text"
        placeholder="Buscar por título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 p-3 border border-gray-500 rounded-lg bg-[#1f1f1f] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Select onValueChange={setGender} value={gender}>
        <SelectTrigger className="w-32 md:w-40 border-gray-500 bg-[#1f1f1f] text-white rounded-lg shadow-sm">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent className="bg-[#1f1f1f] text-white shadow-lg rounded-lg">
          <SelectItem value="todos">All</SelectItem>
          <SelectItem value="history">History</SelectItem>
          <SelectItem value="american">American</SelectItem>
          <SelectItem value="crime">Crime</SelectItem>
          <SelectItem value="fiction">Fiction</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="magical">Magical</SelectItem>
          <SelectItem value="mystery">Mystery</SelectItem>
          <SelectItem value="love">Love</SelectItem>
          <SelectItem value="classic">Classic</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setSort} value={sort}>
        <SelectTrigger className="w-32 md:w-40 border-gray-500 bg-[#1f1f1f] text-white rounded-lg shadow-sm">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent className="bg-[#1f1f1f] text-white shadow-lg rounded-lg">
          <SelectItem value="likes">Likes</SelectItem>
          <SelectItem value="views">Views</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        variant="outline"
        className="flex items-center gap-2 border-gray-500 bg-[#1f1f1f] text-white rounded-lg shadow-sm px-4 py-2 transition hover:bg-gray-700"
      >
        {sortOrder === "asc" ? "Crescente" : "Decrescente"}
        <ArrowUpDown />
      </Button>
    </motion.div>
  );
}

export default Filtros;
