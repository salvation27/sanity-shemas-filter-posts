export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Заголовок",
      options: {
        maxLength: 10,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    // {
    //   name: "location",
    //   title: "Location",
    //   type: "geopoint",
    // },
    {
      name: "emodji",
      title: "Emodji",
      type: "string",
    },
    {
      name: "nums",
      title: "Numbers",
      //   type: "string",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        // layout: "radio",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    // =================================
    // радио кнопки
    {
      name: "propertyType",
      title: "PropertyType",
      type: "string",
      options: {
        list: [
          { title: "House", value: "house" },
          { title: "About", value: "about" },
        ],
        // layout: "radio",
      },
    },
    // ====================================
    {
      name: "data",
      title: "Data",
      type: "number",
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //     maxLength: 10,
    //   },
    // },

    // ================================
    // нижнее поле генерируется если заполнено верхнее
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image1",
      title: "Image1",
      type: "image",
    },
    {
      name: "email",
      title: "Email",
      type: "email",
    },
    {
      name: "date2",
      title: "Дата",
      type: "date",
    },
    {
      name: "image2",
      title: "Image2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "boolean1",
      title: "Boolean",
      type: "boolean",
    },
    {
      name: "datatime",
      title: "Data Time",
      type: "datetime",
    },

    // ==============================
    // несколько полей  в одном
    {
      name: "testimonials",
      title: "Data Testimonials",
      type: "testimonials",
    },
    {
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: [
          { title: "5 Stars", value: "5-stars" },
          { title: "4 Stars", value: "4-stars" },
          { title: "3 Stars", value: "3-stars" },
          { title: "2 Stars", value: "2-stars" },
          { title: "1 Stars", value: "1-stars" },
        ],
        layout: "radio",
      },
    },
    {
      name: "host",
      title: "host",
      type: "host",
    },
    //    ==============================

    // ========================
    // несколько полей  заголовок описание и картинка
    // {
    //   name: "abouts",
    //   title: "Abouts",
    //   type: "abouts",
    // },
    // ========================================

    // {
    //   name: "images",
    //   title: "Images",
    //   type: "array",
    //   of: [{ type: "propertyImage" }],
    // },
  ],
};
