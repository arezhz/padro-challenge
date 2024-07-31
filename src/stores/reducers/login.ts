import { IActionsDto } from "../models/i-action.dto";

export default (state: string | null, action: IActionsDto<string>): string | null => {
    let stateClone = state;
    if (!stateClone) {
      stateClone = null;
    }
    switch (action.type) {
      case 'LOGINPHONENUMBER':
        stateClone = action.data;
        return stateClone;
      default:
        return stateClone;
    }
  };