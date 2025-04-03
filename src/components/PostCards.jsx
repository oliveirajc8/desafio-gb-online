import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";

function PostCards({ posts }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-[#2c2f2e] text-white rounded-lg shadow-md p-4 font-inter">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{posts.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-gray-300 leading-relaxed">
            {posts.body}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 text-xs font-semibold">Tags:</span>
            {posts.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800/70 text-gray-300 px-3 py-1 text-xs rounded-full transition 
                           hover:scale-105 hover:bg-gray-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-x-4 text-sm font-medium">
            <span className="flex items-center gap-x-1">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              {posts.reactions.likes}
            </span>
            <span className="flex items-center gap-x-1">
              <ThumbsDown className="w-5 h-5 text-red-400" />
              {posts.reactions.dislikes}
            </span>
            <span className="flex items-center gap-x-1 text-gray-400">
              <Eye className="w-5 h-5" />
              {posts.views}
            </span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default PostCards;
