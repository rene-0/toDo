import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'


export class AxiosHelper {
  async request <T>(request: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    const response = await axios({
      method: request.method,
      url: request.url,
      data: request.data,
      headers: {
        ...(request.headers || {
          'Content-Type': 'application/json',
        })
      }
    }) as unknown as AxiosResponse<T, any>

    return response
  }
}
