import { ApiUrl } from '@/api/api-url'
import ApiService from '@/api/axios'
import type { ILogin } from '@/types/auth.type'

const AuthService = {
  loginAdmin(reqBody: ILogin) {
    return ApiService.post(ApiUrl.ADMIN_LOGIN, reqBody)
  },
}

export default AuthService
