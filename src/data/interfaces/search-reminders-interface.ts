import { Reminders } from '../model/reminder-model'

export interface SearchReminders {
  load (params: SearchReminders.Params): Promise<SearchReminders.Model>
}

export namespace SearchReminders {
  export type Params = Partial<Reminders>

  export type Model = Reminders[]
}