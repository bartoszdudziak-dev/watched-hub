// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for category documents
 */
interface CategoryDocumentData {
	/**
	 * Name field in *category*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: category.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;
}

/**
 * category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;

/**
 * Content for post documents
 */
interface PostDocumentData {
	/**
	 * Title field in *post*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Poster field in *post*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.poster
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	poster: prismic.ImageField<never>;
	
	/**
	 * Category field in *post*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	category: prismic.ContentRelationshipField<"category">;
	
	/**
	 * Release Date field in *post*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.release_date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	release_date: prismic.DateField;
	
	/**
	 * Watched Date field in *post*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.watched_date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	watched_date: prismic.DateField;
	
	/**
	 * Rate field in *post*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.rate
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	rate: prismic.SelectField<"1" | "2" | "3" | "4" | "5">;
	
	/**
	 * review field in *post*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: post.review
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	review: prismic.RichTextField;
}

/**
 * post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;

interface ReviewDocumentData {}

/**
 * review document from Prismic
 *
 * - **API ID**: `review`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ReviewDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<ReviewDocumentData>, "review", Lang>;

export type AllDocumentTypes = CategoryDocument | PostDocument | ReviewDocument;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			CategoryDocument,
			CategoryDocumentData,
			PostDocument,
			PostDocumentData,
			ReviewDocument,
			ReviewDocumentData,
			AllDocumentTypes
		}
	}
}