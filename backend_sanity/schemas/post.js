export default {
  name: "posts",
  title: "Posts",
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
      options: {
        source: "title",
        maxLength: 20,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: {
        type: "author",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: {
        type: "category",
        of:'array'
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: {
    //     type: "reference",
    //     to: {
    //       type: "category",
    //     },
    //   },
    // },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    // {
    //   name: "body",
    //   title: "Body",
    //   type: "blockContent",
    // },
  ],
  //   preview:{
  //       select:{
  //           title:'title',
  //           author:'author.name',
  //           media:'mainImage'
  //       },
  //       prepare(selection){
  //           const{author} = selection
  //           return Object.assign({},selection,{
  //            subtitle:author && `by ${author}`
  //           })
  //       }
  //   }
};
