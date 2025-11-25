type NavLink = {
    id: number;
    name: string;
    type: "finder" | "contact" | "resume";
}
type NavIcon = {
    id: number;
    img: string;
}
type DockApp = {
    id: string;
    name: string;
    icon: string;
    canOpen: boolean;
}
type BlogPosts = {
    id: number;
    date: string;
    title: string;
    image: string;
    link: string;
};
type TechStack = {
    category: string;
    items: string[];
};
type Social = {
    id: number;
    text: string;
    icon: string;
    bg: string;
    link: string;
};
type PhotoLinks = {
    id: number;
    icon: string;
    title: string;
}
type Galery = {
    id: number;
    img: string;
}
type WorkLocation = {
    id: number;
    type: string;
    name: string;
    icon: string;
    kind: "folder" | "file";
    children?: Project[];
};
type Project = {
    id: number;
    name: string;
    icon: string;
    kind: "file" | "folder";
    position?: string;
    windowPosition?: string;
    href?: string;
    fileType?: "txt" | "url" | "img" | "fig";
    subtitle?: string;
    image?: string;
    children?: ProjectDetails[]
}
type ProjectDetails ={
    id: number,
    name: string
    icon: string,
    kind?: "file",
    fileType?: string,
    position?: string,
    description?: string[],
    imageUrl?: string,
    href?: string,
}
type ResumeLocation = {
    id: number
    type: string
    name: string
    icon: string
    kind: string
    children: ResumeLocationDetails[]
}
type ResumeLocationDetails = {
    id: number
    name: string
    icon: string
    kind: string
    fileType: string
}
type AboutLocation = {
    id: number
    type: string
    name: string
    icon: string
    kind: string
    children: LocationDetails[]
}
type LocationDetails = {
    id: number
    name: string
    icon?: string
    kind?: string
    fileType?: string
    position?: string
    imageUrl?: string
    subtitle?: string
    image?: string
    description?: string[]
}
type TrashLocation =  {
    id: number
    type: string
    name: string
    icon: string
    kind: string
    children: TrashLocationDetails[]
}
type TrashLocationDetails = {
    id: number
    name: string
    icon: string
    kind: string
    fileType: string
    position: string
    imageUrl: string
}

export type {
    NavLink,
    NavIcon,
    DockApp,
    BlogPosts,
    TechStack,
    Social,
    PhotoLinks,
    Galery,
    WorkLocation,
    ResumeLocation,
    AboutLocation,
    TrashLocation
}