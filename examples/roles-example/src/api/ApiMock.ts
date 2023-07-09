import type { RolesListResponse, ApiClient, RoleFindRequest, RoleFindResponse } from './ApiTypes'
export const roleFindResponse: RoleFindResponse = {
    roleId: 1,
    roleName: "super admin",
    roleUsers: 5,
    rolePermissions: 5
};

export const rolesListResponse: RolesListResponse = {
    roles: [
        {
            roleId: 1,
            roleName: "Admin",
            roleUsers: 10,
            rolePermissions: 20
        },
        {
            roleId: 2,
            roleName: "User",
            roleUsers: 50,
            rolePermissions: 30
        }
    ],
    deleteRoles: [
        {
            roleId: 3,
            roleName: "Guest",
            roleUsers: 5,
            rolePermissions: 10
        }
    ]
};
const apiClient: ApiClient = {
    rolesList: async (): Promise<RolesListResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return rolesListResponse;
    },
    rolesListWithErr: async (): Promise<RolesListResponse> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        throw new Error('Failed to fetch roles list');
    },
    roleFind: async (request: RoleFindRequest): Promise<RoleFindResponse> => {
        // Simulating an API request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = roleFindResponse
        response.roleId = request.roleId

        return response;
    },
    roleFindWithErr: async (request: RoleFindRequest): Promise<RoleFindResponse> => {
        // Simulating an API request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw new Error('Failed to fetch roles list');

    }
};

export default apiClient;
