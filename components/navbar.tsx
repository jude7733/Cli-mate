import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CloudIcon, MenuIcon, ClockIcon, MapIcon, SettingsIcon } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <header className="bg-primary/60 text-primary-foreground p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CloudIcon className="w-6 h-6" />
        <h1 className="text-xl font-bold">Cli mate</h1>
      </div>

      <ModeToggle />
    </header>
  )
}
