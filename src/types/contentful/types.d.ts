export interface Contentful {
  sys:      ContentfulSys;
  total:    number;
  skip:     number;
  limit:    number;
  items:    Item[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   AssetFields;
}

export interface AssetFields {
  title:       string;
  description: string;
  file:        File;
}

export interface File {
  url:         string;
  details:     Details;
  fileName:    string;
  contentType: string;
}

export interface Details {
  size:  number;
  image: Image;
}

export interface Image {
  width:  number;
  height: number;
}

export interface Metadata {
  tags: ContentType[];
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id:       string;
  type:     Type;
  linkType: string;
}

export enum Type {
  Link = "Link",
}

export interface AssetSys {
  space:        ContentType;
  id:           string;
  type:         string;
  createdAt:    Date;
  updatedAt:    Date;
  environment:  ContentType;
  revision:     number;
  locale:       string;
  contentType?: ContentType;
}

export interface Item {
  metadata: Metadata;
  sys:      AssetSys;
  fields:   ItemFields;
}

export interface ItemFields {
  name:        string;
  price:       string;
  description?: Description;
  imageCake?:   Asset[];
  slug?:        string;
}

export interface Description {
  data:     Data;
  content:  DescriptionContent[];
  nodeType: string;
}

export interface DescriptionContent {
  data:     Data;
  content:  ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data:     Data;
  marks:    any[];
  value:    string;
  nodeType: string;
}

export interface Data {
}

export interface ContentfulSys {
  type: string;
}
