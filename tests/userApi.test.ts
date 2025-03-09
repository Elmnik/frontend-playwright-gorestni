import { test, expect, APIRequestContext } from '@playwright/test';
import { UserApi } from '../api/UserApi';
import { UserPage } from '../ui/userPage';
import { userData } from '../utils/testData';

test.describe('GoRest API and UI Tests', () => {
    let userApi: UserApi;
    let userPage: UserPage;
    let userId: number;

    test.beforeAll(async ({ playwright }) => {
        const apiRequest = await playwright.request.newContext();
        userApi = new UserApi(apiRequest);

        const page = await (await playwright.chromium.launch()).newPage();
        userPage = new UserPage(page);
    });

    test.skip('Create, Get, Update, and Delete User via API and UI', async () => {
        // Create user via API
        const newUser = await userApi.createUser(userData);
        expect(newUser).toHaveProperty('id');
        userId = newUser.id;

        // Get user via API
        const fetchedUser = await userApi.getUser(userId);
        expect(fetchedUser).toMatchObject(userData);

        // UI interaction (simple navigation and data creation)
        userPage.visit();
        userPage.login(process.env.GOREST_API_TOKEN as string);
        userPage.createUser(userData.name, userData.gender, userData.email, userData.status);

        // Update user status via API
        const updatedUser = await userApi.updateUser(userId,'inactive',Object);
        expect(updatedUser.status).toBe('inactive');

        // Delete user via API
        await userApi.deleteUser(userId);
    }),

    test("Should not create a duplicate user", async ({ request }) => {
        const userApi = new UserApi(request);
      
        const userData = {
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        };
      
        // Primer intento: Creación exitosa
        const newUser = await userApi.createUser(userData);
        console.log("User created:", newUser);
      
        // Segundo intento: Debe fallar porque el usuario ya existe
        try {
          await userApi.createUser(userData);
        } catch (error) {
          console.log("Expected error:", error.message);
          expect(error.message).toContain("User already exists");
        }
    })
})