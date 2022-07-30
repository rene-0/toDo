import { AxiosHelper } from '../../helpers/axios/axios-helper'
import { ChangeReminderCompletion } from '../interfaces/change-reminder-completion-interface'

export class RemoteChangeReminderCompletion implements ChangeReminderCompletion {
  async update (params: ChangeReminderCompletion.Params): Promise<ChangeReminderCompletion.Model> {
    const axiosHelper = new AxiosHelper()
    const reminders = await axiosHelper.request<ChangeReminderCompletion.Model>({
      url: 'http://localhost:5050/api/reminder/changeCompletion',
      method: 'PATCH',
      data: params
    })

    return reminders.data
  }
}