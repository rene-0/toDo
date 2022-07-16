import { AxiosHelper } from '../../helpers/axios/axios-helper'
import { SearchReminders } from '../interfaces/search-reminders-interface'

export class RemoteSearchReminders implements SearchReminders {
  async load (params: SearchReminders.Params): Promise<SearchReminders.Model> {
    const axiosHelper = new AxiosHelper()
    const reminders = await axiosHelper.request<SearchReminders.Model>({
      url: 'http://localhost:5050/api/reminders',
      method: 'POST',
      data: params
    })

    return reminders.data
  }
}
