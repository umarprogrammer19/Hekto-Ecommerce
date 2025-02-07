import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "ohv29asc",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.TOKEN
});

