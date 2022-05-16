export default {
  name: "author",
  title: "Author->Posts",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 15,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "bio",
    //   title: "Bio",
    //   type: "array",
    //   of:[
    //       {
    //           title:'Block',
    //           type:'block',
    //           styles:[{title:'Normal',value:'normal'}],
    //           lists:[]
    //       }
    //   ]
    // },
  ],
};
