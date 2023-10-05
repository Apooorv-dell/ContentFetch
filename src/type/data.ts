import { author, openAccessPdf, citationStyles } from "./author";
export interface Data {
  paperId: String;
  url: String;
  title: String;
  abstract: String;
  citationCount: Number;
  citationStyles: citationStyles;
  isOpenAccess: Boolean;
  openAccessPdf: openAccessPdf | null;
  author: author[];
}

export interface Response {
  total: Number;
  offset: Number;
  next: Number;
  data: Data[]
}
