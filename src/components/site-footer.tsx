export function SiteFooter() {
  return (
    <footer className="border-line text-paper/60 flex flex-col gap-4 border-t px-5 py-10 font-sans text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>Isaiah Ball, Nashville TN</p>
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/_.isaiahball/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-paper transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@_isaiahball"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-paper transition-colors"
        >
          TikTok
        </a>
      </div>
      <p>© {new Date().getFullYear()} Isaiah Ball</p>
    </footer>
  );
}
