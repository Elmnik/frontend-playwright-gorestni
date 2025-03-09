import { APIRequestContext } from '@playwright/test';

export class UserApi {
  private request: APIRequestContext;
  private baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Create a new user
  async createUser(userData: object) {
    const response = await this.request.post(`${this.baseUrl}/users`, {
    data: userData
    });
  
    console.log(`Response Status: ${response.status()}`);
    console.log(`Response Body: ${await response.text()}`);
  
    if (response.status() === 400) {
      throw new Error(`User already exists. Status: ${response.status()}`);
    }
  
    if (!response.ok()) {
      throw new Error(`Failed to create user. Status: ${response.status()}`);
    }
  
    return await response.json();
  }

  // Retrieve a user by ID
  async getUser(userId: number) {
    const response = await this.request.get(`${this.baseUrl}/users/${userId}`);
    if (response.status() !== 200) {
      throw new Error(`Failed to retrieve user. Status: ${response.status()}`);
    }
    return await response.json();
  }

  // Update a user by ID
  async updateUser(userId: number, status: string, updatedData: object) {
    const response = await this.request.put(`${this.baseUrl}/users/${userId}`, {
      data: updatedData,
    });
    if (response.status() !== 200) {
      throw new Error(`Failed to update user. Status: ${response.status()}`);
    }
    return await response.json();
  }

  // Delete a user by ID
  async deleteUser(userId: number) {
    const response = await this.request.delete(`${this.baseUrl}/users/${userId}`);
    if (response.status() !== 200) {
      throw new Error(`Failed to delete user. Status: ${response.status()}`);
    }
    return await response.json();
  }
}