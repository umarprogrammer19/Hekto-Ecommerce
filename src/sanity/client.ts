import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "muz30eox",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.TOKEN
});

