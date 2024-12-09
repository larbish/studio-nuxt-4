import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    foo: group({
      title: "Foo Group",
      description: "Foo group description.",
      icon: "i-mdi-palette-outline",
      fields: {
        bar: field({
          type: "string",
          title: "Bar title",
          description: "Bar description.",
          icon: "i-mdi-magnify",
          default: "",
        }),
      },
    }),
  },
});
