export const shipment = {
  name: "shipment",
  type: "document",
  title: "Shipment",
  fields: [
    {
      name: "orderId",
      type: "string",
      title: "Order ID",
    },
    {
      name: "recipient",
      type: "object",
      title: "Recipient",
      fields: [
        { name: "fullName", type: "string", title: "Full Name" },
        { name: "email", type: "string", title: "Email" },
        { name: "phone", type: "string", title: "Phone" },
        { name: "address", type: "string", title: "Address Line 1" },
        { name: "city", type: "string", title: "City" },
        { name: "postalCode", type: "string", title: "Postal Code" },
        { name: "country", type: "string", title: "Country" },
      ],
    },
    {
      name: "packages",
      type: "array",
      title: "Packages",
      of: [
        {
          type: "object",
          fields: [
            { name: "weight", type: "number", title: "Weight (oz)" },
            { name: "dimensions", type: "string", title: "Dimensions (HxWxL)" },
          ],
        },
      ],
    },
    {
      name: "rates",
      type: "array",
      title: "Shipping Rates",
      of: [
        {
          type: "object",
          fields: [
            { name: "carrier", type: "string", title: "Carrier" },
            { name: "service", type: "string", title: "Service" },
            { name: "cost", type: "number", title: "Shipping Cost" },
          ],
        },
      ],
    },
    {
      name: "label",
      type: "object",
      title: "Label",
      fields: [
        { name: "labelId", type: "string", title: "Label ID" },
        { name: "trackingNumber", type: "string", title: "Tracking Number" },
        { name: "labelUrl", type: "url", title: "Label URL" },
      ],
    },
    {
      name: "tracking",
      type: "object",
      title: "Tracking Information",
      fields: [
        { name: "status", type: "string", title: "Status" },
        { name: "details", type: "string", title: "Details" },
      ],
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
    },
  ],
};
