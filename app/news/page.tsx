import Link from "next/link";

const PAGES = [
  { id: 1, title: "News number 1" },
  { id: 2, title: "News number 2" },
  { id: 3, title: "News number 3" },
];

export default function NewsPage() {
  return (
    <ul>
      {PAGES.map((page) => {
        return (
          <li key={page.id}>
            <Link href={`news/${page.id}`}>{page.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
