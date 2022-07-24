import { AxiosHelper } from '../../helpers/axios/axios-helper'
import { CreateReminder } from '../interfaces/create-reminder-interface'

export class RemoteCreateReminders implements CreateReminder {
  async create (params: CreateReminder.Params): Promise<CreateReminder.Model> {
    const axiosHelper = new AxiosHelper()
    const reminders = await axiosHelper.request<CreateReminder.Model>({
      url: 'http://localhost:5050/api/reminder/create',
      method: 'POST',
      data: params
    })

    return reminders.data
  }
}
