import NavigationMenu from "./components/navmenu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div className="mx-auto min-h-screen p-4">

      {/* Navbar */}
      <header className="flex items-center gap-6 px-5 py-4">
        <h1 className="text-2xl text-light pacifico-regular shrink-0">Dribbles</h1>

        <div className="flex-1 max-w-lg">
          <Input placeholder="What are you looking for?" />
        </div>

        <nav className="pl-4">
          <NavigationMenu />
        </nav>

        <div className="absolute right-15 flex items-center gap-2">
          <Button variant="outline" className="border rounded-4xl p-6">Sign up</Button>
          <Button  className="border rounded-4xl p-6">Log in</Button>
        </div>
      </header>

      {/* Page content */}
      <main className="flex flex-col items-center justify-center gap-4 p-4">
        <Button>Get started</Button>
        <p className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </p>
      </main>

    </div>
  )
}

export default App