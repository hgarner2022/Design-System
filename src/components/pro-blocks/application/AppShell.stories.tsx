import type { Meta, StoryObj } from '@storybook/react';
import { AppShell, AppShellHeader, AppShellNavLink } from './AppShell';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/card';

const meta: Meta<typeof AppShell> = {
  title: 'Pro Blocks/Application/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppShell>;

const DemoHeader = () => (
  <AppShellHeader
    logo={
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-primary"></div>
        <span className="font-bold">Pro Blocks</span>
      </div>
    }
    actions={
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">Sign In</Button>
        <Button size="sm">Get Started</Button>
      </div>
    }
  >
    <AppShellNavLink href="#" active>Dashboard</AppShellNavLink>
    <AppShellNavLink href="#">Projects</AppShellNavLink>
    <AppShellNavLink href="#">Settings</AppShellNavLink>
  </AppShellHeader>
);

const DemoSidebar = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <h3 className="font-medium">Navigation</h3>
      <div className="flex flex-col gap-1">
        <Button variant="ghost" className="justify-start">Dashboard</Button>
        <Button variant="ghost" className="justify-start">Projects</Button>
        <Button variant="ghost" className="justify-start">Settings</Button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-medium">Recent</h3>
      <div className="flex flex-col gap-1">
        <Button variant="ghost" className="justify-start">Project A</Button>
        <Button variant="ghost" className="justify-start">Project B</Button>
        <Button variant="ghost" className="justify-start">Project C</Button>
      </div>
    </div>
  </div>
);

const DemoContent = () => (
  <div className="grid gap-4">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Button>New Project</Button>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="p-4">
          <div className="flex flex-col gap-2">
            <div className="size-8 rounded-lg bg-primary/20"></div>
            <h3 className="font-medium">Card {i + 1}</h3>
            <p className="text-sm text-muted-foreground">
              This is a demo card with some sample content.
            </p>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export const Default: Story = {
  args: {
    header: <DemoHeader />,
    sidebar: <DemoSidebar />,
    children: <DemoContent />,
  },
};

export const WithoutSidebar: Story = {
  args: {
    header: <DemoHeader />,
    children: <DemoContent />,
  },
};

export const WithoutHeader: Story = {
  args: {
    sidebar: <DemoSidebar />,
    children: <DemoContent />,
  },
};

export const ContentOnly: Story = {
  args: {
    children: <DemoContent />,
  },
}; 