export interface ChangeReminderCompletion {
  update: (params: ChangeReminderCompletion.Params) => Promise<ChangeReminderCompletion.Model> 
}

export namespace ChangeReminderCompletion {
  export type Params = {
    id: string
    complete: boolean
  }

  export type Model = boolean
}