// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CategoryPageDocumentDataSlicesSlice = PagePhotoSlice;

/**
 * Content for CategoryPage documents
 */
interface CategoryPageDocumentData {
  /**
   * Title field in *CategoryPage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Category field in *CategoryPage*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: category_page.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    "Travel" | "Home" | "Foods" | "People" | "Animals"
  >;

  /**
   * Slice Zone field in *CategoryPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: category_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoryPageDocumentDataSlicesSlice> /**
   * Meta Title field in *CategoryPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: category_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *CategoryPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: category_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *CategoryPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: category_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * CategoryPage document from Prismic
 *
 * - **API ID**: `category_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryPageDocumentData>,
    "category_page",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = NavigationItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = PagePhotoSlice;

/**
 * Content for HomePage documents
 */
interface PageDocumentData {
  /**
   * Title field in *HomePage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type PhotoGridDocumentDataSlicesSlice = PhotoSlice;

/**
 * Content for PhotoGrid documents
 */
interface PhotoGridDocumentData {
  /**
   * Slice Zone field in *PhotoGrid*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: photo_grid.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PhotoGridDocumentDataSlicesSlice>;
}

/**
 * PhotoGrid document from Prismic
 *
 * - **API ID**: `photo_grid`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PhotoGridDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PhotoGridDocumentData>,
    "photo_grid",
    Lang
  >;

export type AllDocumentTypes =
  | CategoryPageDocument
  | NavigationDocument
  | PageDocument
  | PhotoGridDocument;

/**
 * Primary content in *NavigationItem → Default → Primary*
 */
export interface NavigationItemSliceDefaultPrimary {
  /**
   * Link field in *NavigationItem → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_item.default.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationItem*
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;

/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: NavigationItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationItemSlice = prismic.SharedSlice<
  "navigation_item",
  NavigationItemSliceVariation
>;

/**
 * Primary content in *PagePhoto → Default → Primary*
 */
export interface PagePhotoSliceDefaultPrimary {
  /**
   * Image1 field in *PagePhoto → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_photo.default.primary.image1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image1: prismic.ImageField<never>;

  /**
   * Image2 field in *PagePhoto → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page_photo.default.primary.image2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image2: prismic.ImageField<never>;

  /**
   * Category field in *PagePhoto → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_photo.default.primary.category
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  category: prismic.RichTextField;

  /**
   * Description field in *PagePhoto → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_photo.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for PagePhoto Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PagePhotoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PagePhotoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PagePhoto*
 */
type PagePhotoSliceVariation = PagePhotoSliceDefault;

/**
 * PagePhoto Shared Slice
 *
 * - **API ID**: `page_photo`
 * - **Description**: PagePhoto
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PagePhotoSlice = prismic.SharedSlice<
  "page_photo",
  PagePhotoSliceVariation
>;

/**
 * Item in *Photo → Default → Primary → Categories*
 */
export interface PhotoSliceDefaultPrimaryCategoriesItem {}

/**
 * Primary content in *Photo → Default → Primary*
 */
export interface PhotoSliceDefaultPrimary {
  /**
   * Photo field in *Photo → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Description field in *Photo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Category field in *Photo → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.category
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    "Travel" | "Home" | "Foods" | "People" | "Animals"
  >;

  /**
   * Date field in *Photo → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Location field in *Photo → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Categories field in *Photo → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: photo.default.primary.categories[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<
    Simplify<PhotoSliceDefaultPrimaryCategoriesItem>
  >;
}

/**
 * Default variation for Photo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PhotoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Photo*
 */
type PhotoSliceVariation = PhotoSliceDefault;

/**
 * Photo Shared Slice
 *
 * - **API ID**: `photo`
 * - **Description**: Photo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhotoSlice = prismic.SharedSlice<"photo", PhotoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CategoryPageDocument,
      CategoryPageDocumentData,
      CategoryPageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PhotoGridDocument,
      PhotoGridDocumentData,
      PhotoGridDocumentDataSlicesSlice,
      AllDocumentTypes,
      NavigationItemSlice,
      NavigationItemSliceDefaultPrimary,
      NavigationItemSliceVariation,
      NavigationItemSliceDefault,
      PagePhotoSlice,
      PagePhotoSliceDefaultPrimary,
      PagePhotoSliceVariation,
      PagePhotoSliceDefault,
      PhotoSlice,
      PhotoSliceDefaultPrimaryCategoriesItem,
      PhotoSliceDefaultPrimary,
      PhotoSliceVariation,
      PhotoSliceDefault,
    };
  }
}
