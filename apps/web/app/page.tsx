'use client';

import { Button } from '../../../shared/src/components/ui/button';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../../../shared/src/components/ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../shared/src/components/ui/card';
import { Input } from '../../../shared/src/components/ui/input';
import { ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../../shared/src/components/ui/tooltip';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../../../shared/src/components/ui/menubar';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../shared/src/components/ui/select';

import { useToast } from '../../../shared/src/components/ui/use-toast';

export default function Index() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col items-center justify-center w-full py-12">
      <h1 className="text-6xl text-black">Hello World</h1>

      <div className="text-2xl mt-6">
        <Button
          className="text-2xl text-white border p-2 rounded-2xl bg-white text-black mt-5"
          variant={'destructive'}
        >
          Hello World
          <DotFilledIcon className="h-4 w-4 fill-current" />
          <ChevronRightIcon className="ml-auto h-4 w-4" />
        </Button>
      </div>

      <div className="text-2xl mt-6">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies.
          </AlertDescription>
        </Alert>
      </div>

      <div className="text-2xl mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div className="text-2xl mt-5">
        <Input placeholder="hello world" className="bg-white text-black p-4" />
      </div>

      <div className="text-2xl mt-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="text-2xl mt-5">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="text-2xl mt-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="text-2xl mt-5">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label>Name</label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label>Framework</label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="text-2xl mt-5">
        <Button
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    </div>
  );
}
