export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const demos: { name: string; items: Item[] }[] = [
    {
      name: 'Layouts',
      items: [
        {
          name: 'Add a new task',
          slug: 'NewTask',
          description: 'Create UI that is shared across routes',
        },
        {
          name: 'completed tasks',
          slug: '',
          description: 'Organize routes without affecting URL paths',
        },
      ],
    },

    

  ];
  