interface IProject {
  name: string;
  id: string;
  description: string;
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
  technologies: Array<string>;
  github: string;
  test: string;
  tags: [{ name: string; id: string }];
}

interface ITechnology {
  name: string;
  imageUrl: {
    src: string;
    width: number;
    height: number;
  };
}
