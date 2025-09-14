export interface TeamMemberProps {
    name: string;
    role: string;
    image?: string;
}

export interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}
