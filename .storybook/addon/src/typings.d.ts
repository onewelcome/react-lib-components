declare module "global";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
