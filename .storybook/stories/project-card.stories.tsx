import type {Meta, StoryObj} from '@storybook/react';
import ProjectCard from "@/components/project/project-card";

const project = {
    name: 'highlight',
    url: '#',
    language: 'PHP',
    description: '🎨 Fast, extensible, server-side code highlighting for web and terminal'
}

const meta: Meta<typeof ProjectCard> = {
    component: ProjectCard,
}

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
    args: {project},
}
