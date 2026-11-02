export default function sitemap() {
  const baseUrl = "https://sultan-power.vercel.app";

  const routes = [
    "",
    "/generators",
    "/generators/cummins-generators",
    "/generators/perkins-generators",
    "/generators/isuzu-generators",
    "/generators/yangdong-generators",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
