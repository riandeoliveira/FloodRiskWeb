import { makeAutoObservable } from "mobx";

type ActionType = "CREATE" | "DELETE" | "READ_ALL" | "READ_ONE" | "UPDATE";

class SideBarStore {
  public actionType: ActionType = "READ_ALL";
  public isOpen: boolean = true;

  public constructor() {
    makeAutoObservable(this);
  }

  public setActionType(actionType: ActionType): void {
    this.actionType = actionType;
  }

  public setIsOpen(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  public toggle(): void {
    if (this.isOpen) this.setIsOpen(false);
    else this.setIsOpen(true);
  }
}

export const sideBarStore = new SideBarStore();
