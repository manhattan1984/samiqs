import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "7Pjxkgn6txmRSFWMZKyCns", // ID of a project you are using
      token:
        "XP0g2Mchj5AppuroOIMYwjHCoe0IMOaPG342KfEFdoKi9s7zM5EVDVUx3DpshwsTtdrrAonTD6Gs7KpKayQA", // API token for that project
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
