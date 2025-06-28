import { CloudIcon, Github } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-primary/10 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CloudIcon className="w-10 h-10" fill="orange" />
        <h1 className="text-xl font-bold">Cli mate</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https:github.com/jude7733/Cli-mate" target=" _blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          <Github className="w-6 h-6" />
        </Link>
        <ModeToggle />
      </div>
    </header >
  )
}
