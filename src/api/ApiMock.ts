import type { RolesListResponse, ApiClient } from './ApiTypes'

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
    }
};

export default apiClient;
