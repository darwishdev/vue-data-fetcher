

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




export interface RoleFindRequest {
    roleId: number;
}
export interface RoleFindResponse {
    roleId: number;
    roleName: string;
    roleUsers: number;
    rolePermissions: number;
}

export interface ApiClient {
    rolesList: (request: RolesListRequest) => Promise<RolesListResponse>
    rolesListWithErr: (request: RolesListRequest) => Promise<RolesListResponse>
    roleFind: (request: RoleFindRequest) => Promise<RoleFindResponse>
    roleFindWithErr: (request: RoleFindRequest) => Promise<RoleFindResponse>
}