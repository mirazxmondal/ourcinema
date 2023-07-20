const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [{ title: "Strong", value: "strong" }],
            annotations: [
              {
                name: "image",
                type: "image",
                title: "Image",
                fields: [
                  {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                  },
                  {
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default page;
