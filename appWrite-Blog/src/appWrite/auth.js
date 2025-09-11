import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
	client = new Client();
	account;
	constructor() {
		this.client.setEndpoint(config.url).setProject(config.projectId);
		this.account = new Account(this.client);
	}
	//signup
	async createAccount({ email, password, name }) {
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				//call another method
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}
	//login
	async login({ email, password }) {
		try {
			return await this.account.createEmailPasswordSession(
				email,
				password
			);
		} catch (error) {
			throw error;
		}
	}
	//  get current user
	async getCurrentUser() {
		try {
			return await this.account.get();
		} catch (error) {
			throw error;
		}
		return null;
	}
	//  logout
	async logout() {
		try {
			return await this.account.deleteSessions();
		} catch (error) {
			throw error;
		}
	}
}

const authService = new AuthService();

export default authService;
