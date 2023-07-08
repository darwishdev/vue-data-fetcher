

export interface RolesListRequest { }

export interface RolesListRow {
    roleId: number;
    roleName: string;
    roleUsers: number;
    rolePermissions: number;
}

export interface RolesListResponse {
    roles: RolesListRow[];
    deleteRoles: RolesListRow[];
}


export interface ApiClient {
    rolesList: (request: RolesListRequest) => Promise<RolesListResponse>
    rolesListWithErr: (request: RolesListRequest) => Promise<RolesListResponse>
}