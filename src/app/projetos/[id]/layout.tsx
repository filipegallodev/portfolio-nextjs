import { Metadata, ResolvingMetadata } from "next";

interface IProps {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateMetadata(
  { params, searchParams }: IProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const project = await fetch(`https://filipegallo.dev/projects.json`)
    .then((res) => res.json())
    .then((data) => data.find((data: IProject) => data.id === id));

  return {
    title: "FG | Projetos | " + project.name,
    description: "Projetos do Desenvolvedor Front-End Filipe Gallo.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
