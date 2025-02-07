/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/sanity/client";

export const fetchAndMigrateData = async () => {
  try {
    // Fetch the product data
    const res = await fetch("https://next-ecommerce-template-4.vercel.app/api/product");
    if (!res.ok) {
      throw new Error(`Failed to fetch products - Status: ${res.status}`);
    }

    const { products } = await res.json();
    if (!products || !Array.isArray(products)) {
      throw new Error("Invalid product data received");
    }

    // Loop through each product and migrate it
    for (const {
      name,
      category,
      description,
      price,
      imagePath,
      weight,
      discountPercentage = 0,
      isFeaturedProduct = false,
      stockLevel = 0,
    } of products) {
      try {
        if (!imagePath) {
          console.warn(`Skipping product: ${name} due to missing image_path`);
          continue;
        }

        const imageAsset = await uploadImageToSanity(imagePath);
        await client.create({
          _type: "newProducts",
          name,
          category,
          description,
          price,
          discountPercentage,
          isFeaturedProduct,
          stockLevel,
          weight,
          image: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        });
        console.log(`Migrated product: ${name}`);
      } catch (productError) {
        console.error(`Failed to migrate product: ${name}`, productError);
      }
    }
  } catch (error) {
    console.error("Error during migration process:", error);
  }
};

const uploadImageToSanity = async (imageUrl: string) => {
  try {
    if (!imageUrl || typeof imageUrl !== "string") {
      throw new Error(`Invalid image URL: ${imageUrl}`);
    }

    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type") || "image/jpeg";
    const imageAsset = await client.assets.upload("image", res.body as any, {
      filename: imageUrl.split("/").pop() || "image",
      contentType,
    });
    return imageAsset;
  } catch (error) {
    console.error(`Error uploading image: ${imageUrl}`, error);
    throw error;
  }
};
