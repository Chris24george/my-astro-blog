import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    className: "text-[1.05rem] font-medium decoration-dashed hover:underline text-skin-accent",
  };

  return (
    <li>
      <a
        href={href}
        className="block mb-3 bg-skin-card border border-skin-line rounded-lg shadow-sm p-4 w-80 h-36 transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:border-skin-accent focus:outline-none focus:ring-2 focus:ring-skin-accent no-underline"
        tabIndex={0}
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        <p className="text-[0.98rem]">{description}</p>
      </a>
    </li>
  );
}
