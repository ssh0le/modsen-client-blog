export const config = {
  mapToken: process.env.NEXT_PUBLIC_MAP_TOKEN as string,
  subscribeEmailTemplateId: process.env
    .NEXT_PUBLIC_SUBSCRIBE_TEMPLATE_ID as string,
  supportEmailTemplateId: process.env.NEXT_PUBLIC_SUPPORT_TEMPLATE_ID as string,
  emailServiceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
  emailKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
};
