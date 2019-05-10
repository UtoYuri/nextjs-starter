declare module '*.less';

declare module '*.svg' {
  const content: string;
  export default content;
}