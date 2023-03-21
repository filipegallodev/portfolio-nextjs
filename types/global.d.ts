interface IProject {
  name: string;
  id: string;
  description: string;
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
  technologies: string[];
  github: string;
  test: string;
}

