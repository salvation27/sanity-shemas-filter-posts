export default {
  name: "shop",
  title: "Shop",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    // {
    //   name: "cat",
    //   title: "Категория",
    //   type: "cat",
    // },
    {
      name: "propertyType",
      title: "PropertyType",
      type: "string",
      options: {
        list: [
          { title: "Winter", value: "winter" },
          { title: "Summer", value: "summer" },
        ],
        // layout: "radio",
      },
    },
  ],
};
