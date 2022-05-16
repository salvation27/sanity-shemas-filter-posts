export default {
  name: "abouts",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "descr",
      title: "descr",
      type: "text",
    },
    {
      name:'tags',
      type:"array",
      of:[
        {type:'string'}
      ],
      options:{
        layout:'tags'
      }
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
