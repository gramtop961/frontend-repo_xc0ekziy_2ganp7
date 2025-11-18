export default function Footer(){
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <div>© {new Date().getFullYear()} Mytaxflow</div>
        <div className="flex gap-6">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
