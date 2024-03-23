import {useLoaderData} from "react-router-dom";
import defaultImg from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();

  const {cover_image, title, tags, body_html, url} = blog;

  return (
    <div className="mx-auto group border-2 border-primary hover:border-secondary border-opacity-30 hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-900">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || defaultImg}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-400">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
