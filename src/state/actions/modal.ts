import { ActionType } from '../action-types/index';

interface ModalManagerOpen {
    type: ActionType.MODAL_MANAGER_OPEN;
}

interface ModalManagerClose {
    type: ActionType.MODAL_MANAGER_CLOSE;
}

interface ModalManagerData {
    type: ActionType.MODAL_MANAGER_DATA;
    payload:object
}

export type ActionModal = ModalManagerOpen | ModalManagerClose |ModalManagerData;
