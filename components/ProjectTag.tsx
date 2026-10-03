export function ProjectTag({ tag }: { tag: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 rounded-md transition-colors duration-200 group-hover:bg-zinc-200 group-hover:text-zinc-900"
      role="listitem"
    >
      {tag}
    </span>
  );
}
