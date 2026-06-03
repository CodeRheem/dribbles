import { ButtonComponent } from "./components/button"
import NavigationMenu from "./components/navmenu"
import { Input } from "@/components/ui/input"

export function App() {
  return (
    <div className="mx-auto min-h-screen p-4">

      {/* Navbar */}
      <header className="flex items-center gap-6 px-5 py-4">
        <h1 className="text-2xl text-light pacifico-regular shrink-0">Dribbles</h1>

        <div className="flex-1 max-w-lg">
          <Input placeholder="What are you looking for?" />
        </div>

        <nav >
          <NavigationMenu />
        </nav>
      </header>

      {/* Page content */}
      <main className="flex flex-col items-center justify-center gap-4 p-4">
        <ButtonComponent />
        <p className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </p>
      </main>

    </div>
  )
}

export default App