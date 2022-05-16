export default {
  name: "test",
  title: "Test",
  type: "document",
  fields: [
    {
      name: "reviewsTest",
      title: "Reviews",
      type: "array",
      of: [{ type: "test2" }],
    },
  ],
};
