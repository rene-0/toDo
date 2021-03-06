import { Reminders } from '../model/reminder-model'

export interface CreateReminder {
  create (params: CreateReminder.Params): Promise<CreateReminder.Model>
}

export namespace CreateReminder {
  export type Params = Omit<Reminders, 'id'>

  export type Model = Omit<Reminders, 'id'>
}