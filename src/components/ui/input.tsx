import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import {
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="relative flex items-center">
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foregroundborder-transparent h-9 w-full min-w-0 rounded-4xl bg-gray-100 py-6 pl-6 pr-32 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground hover:border-pink-300 hover:ring-3 hover:ring-pink-300/20 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 placeholder:text-muted-foreground border-transparent",
          className
        )}
        {...props}
      />
      <div className="absolute right-2 flex flex-row ">
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shots</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={"font-bold"}>Shots</NavigationMenuLink>
                <NavigationMenuLink>Designers</NavigationMenuLink>
                <NavigationMenuLink>Services</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
        <Button className={"bg-pink-400 border rounded-4xl hover:bg-pink-300"}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></Button>
      </div>
    </div>
  )
}

export { Input }
