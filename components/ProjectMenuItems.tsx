"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string }[] = [
  {
    title: "Brightling Academy",
    href: "/projects/academy",
  },
  {
    title: "The Girl Power Project",
    href: "/projects/girl-power",
  },
  {
    title: "Start Up",
    href: "/projects/start-up",
  },
  {
    title: "Brighter Future",
    href: "/projects/futures",
  },
];

export const ProjectMenuItems = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase font-medium">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-4 p-5 w-64 ">
              {components.map(({ title, href }) => (
                <Link
                  className="font-medium hover:text-greenColor  border-greenColor duration-500 transition-all"
                  key={title}
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
