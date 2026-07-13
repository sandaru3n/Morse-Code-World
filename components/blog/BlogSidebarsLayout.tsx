import { BlogSidebarAd } from "@/components/blog/BlogSidebarAd";

/** Blog pages: center content with optional sticky vertical sidebar ads on wide screens. */
export function BlogSidebarsLayout({
  children,
  contentClassName = "max-w-3xl"
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="blog-with-sidebars mx-auto flex w-full max-w-[1280px] items-start justify-center gap-4 px-4 py-3 sm:gap-6 sm:p-5 lg:px-8 lg:py-8">
      <aside className="hidden w-[160px] shrink-0 xl:block">
        <div className="sticky top-[5.25rem]">
          <BlogSidebarAd />
        </div>
      </aside>

      <div className={`min-w-0 w-full flex-1 ${contentClassName}`}>{children}</div>

      <aside className="hidden w-[160px] shrink-0 xl:block">
        <div className="sticky top-[5.25rem]">
          <BlogSidebarAd />
        </div>
      </aside>
    </div>
  );
}
