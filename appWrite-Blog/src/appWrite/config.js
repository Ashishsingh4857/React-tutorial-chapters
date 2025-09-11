import { Client, Account, Databases, Query } from "appwrite";
import config from "../config/config";

export class Service {
	client = new Client();
	account;
	databases;
	bucket;
	constructor() {
		this.client.setEndpoint(config.url).setProject(config.projectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}
	// create post
	async createPost({
		title,
		slug,
		content,
		featuredImage,
		status,
		userId,
	}) {
		try {
			return await this.databases.createDocument(
				config.databaseId,
				config.collectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId,
				}
			);
		} catch (error) {
			throw error;
		}
	}
	// update post
	async updatePost(
		slug,
		{
			title,

			content,
			featuredImage,
			status,
		}
	) {
		try {
			return await this.databases.updateDocument(
				config.databaseId,
				config.collectionId,
				slug,
				{ title, content, featuredImage, status }
			);
		} catch (error) {
			throw error;
		}
	}
	//delete post
	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.databaseId,
				config.collectionId,
				slug
			);
			return true;
		} catch (error) {
			throw error;
			return false;
		}
	}
	//get post
	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				config.databaseId,
				config.collectionId,
				slug
			);
		} catch (error) {
			error;
		}
	}
	//get all post
	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				config.databaseId,
				config.collectionId,
				queries
			);
		} catch (error) {
			error;
		}
	}
	//file upload service
	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				config.bucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			throw error;
		}
	}
	//delete file
	async deleteFile(fileId) {
		try {
			return await this.bucket.deleteFile(config.bucketId, fileId);
		} catch (error) {
			throw error;
		}
	}
	//getFilePreview
	getFilePreview(fileId) {
		try {
			return this.bucket.getFilePreview(config.bucketId, fileId);
		} catch (error) {
			throw error;
		}
	}
}
const service = new Service();
export default service;
