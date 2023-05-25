import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const project = await fetch(`http://localhost:3000/projects.json`)
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
